---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
      <summary>What is </summary>
       `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.
  </details>

## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC7QHM4D%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8xksbbmjRZYK9%2FcWXHCdm6rb2VT9GFz05mwt7mvfWzAiEAzDm%2FMSBgQ1BtZXUqctrfoVjzFve1FOBzCY%2FR3IPmlNsq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBxHk1e8%2Fq3U1R0WDyrcAyM5m0niuRKbEVlIo2Y4dWmu8fVd7rkxHdm0Ywh%2F8is9R86ttSj3pN8TT%2BJI6W0xU5RzfqZCuOi86FrTW2zbWR6MBj9wUlwNcwPQa6QbcvCWZT6Dyx%2FBvhMSbiwsp%2FH4jDcT2KaHoR1x91rgL15gis5hIi2Xg6QCy2xSn91b1cM5HTPH7LlmOV%2FM%2B1AXMeluWvSAYZ6GXGyuAOcMwg6Mbrl5CPTosd%2BQqzHxMGmEfDUB8JO6qzyly0Wj6UkPIgKklNnL5xGOMdHYg%2FXJHjZnjakwYd5dwZJuTayPCfsbm171m4kjI7rn2Jn3mvc5cqcNAE6gpl2%2BAIghiU%2BIEndPPeRsGVbPcZqM3bZ1LvkVB5zmIriF%2BhWg2I3XciC73nDQZftJt0HalDWjv%2BW66cdxewUHUT7Xoo4wgTfz4UY9VxZEdFuCxbzU0tfEyQRDW2YQfdzNRmn06EH%2Fno8fXz5DYImSrjwDuNlN%2BuIHV35DEvx7BhRD9GIkYiwWaLOD9ahwc8mUk%2BWj8u2CersslXidrwzW4slIBGS4uGGpic6UvFNtYFPlTvDeIlbUyeDZzrgo95oMvu3Do5rcnFUlAXZaMQWUDpOcgZsQOl25wDklygIYa92l3%2BYHhKKVfYTwMJb358AGOqUBzQDWCZKlDBm0qojL7NS0uRVL%2B2YPZfzhqmF1eKQQBeickLvmQn6KhJQ3uLK%2Fp9ViG2V96LqTiD5u%2F2TCpHlNihm3MUJAlebOYiGKjN2rjVCPEhpS1ao128ZURJqy%2B3kaZflFjKBLh5u3f00acrpw%2FQSihh9YBIBhgTVi13f246AhFxhIxEE7h67RuhdCAYcmO53C0MNg5XFQVC9Le7YIR8HaqYbO&X-Amz-Signature=5bb8e660ffef8c683976a1dfa62d5d5bfb7db3300c5ba7a3532a27c58a1e2cbc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
