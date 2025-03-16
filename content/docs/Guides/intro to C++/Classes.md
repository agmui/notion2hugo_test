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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7D7C4DU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDutRTpSxmVK3d3TpEpOQsIo54e1gxDdEFjxmFFmfXu%2BgIhAPpSdmccPG0Nmkd8emB%2Bu1mwuzWE6a5WSvvmYms5VmkrKv8DCDEQABoMNjM3NDIzMTgzODA1IgyOiwoq6s8GatEZq0Qq3APevyZNoiWg8k9l1JGXTXaZj6TXhFgq62jPVFRjN4paoPMv06rpfZ%2FoD1LxrYss1DwrlIfXr8fo8KP4zpSTWccEAAItHaTbYWWKJPi8ITii%2FvpqI9sBij8Bdulxn1m7X2%2Fqixh65j%2BNY3raPD95s1fdjAnY4qCi6cIQU1LRC12%2FQeyjwJGAyTllQ9ktW7DlhOBe4hMKEYaf1juCnvkm5heq5%2BX3Sn9eRPU%2FS2G5WQ%2BZ0MblvfAEFBj5xiMGKYHW4nF3FLWksiAlYjE%2BzVH%2FUbW1HBZ0YSZ%2FNuD5rmbXcr9G0cCqsAau1McEkzhzW72Xtxvr%2BJznvitB1uj9luDXYyXDG9Oig4xchDjxT4j%2FzYCLDfI%2B3f1oKdsGhRYV%2BpbkEY4aGWxV%2BzEF0wwcXjvJVBMftLawQN6x%2Fy3Y%2Bg6fiv%2FDkD2ZbxLsIdLUVG9B2d2o3c6vz6UbF8TTeJGC008qwLwmEihFksxxL1R9xL23ymIAm3ueRrRcxbNJWX6VPWNnynIZROIH99tAMtBTC%2F7mZL0dyl1I5L79fkxB4RWjHqARPSo8KtKZ3ZiMOXQ4mzrm%2BWd6MqHJkrT9JuqesNcmrv6ilxIPD6e0wp7fzxncpcikhuUqxLQEsfpVn7NZ1DCz3tu%2BBjqkAeYLU%2Bdnp7a6AqV4GxGYRKSExeC%2BUCdQgIWx362SYQutlinQhlzdnsZLJ0oT1%2BiGC3xZZ6m9ZCdFf1Cqmn43fhWR%2FZbla5nitNBnRHJ%2FraGZsphggj632pRUC49bKFcKzeFOysOCa7vRszjuRI%2BPx0jzR9GOx9dp%2FbJrTh7Fr0hX0KS3dL3LpNlCGUGaYbS%2FYOjSwyeEjIRCqSzziw%2BzIzKruMyJ&X-Amz-Signature=3247706df2a9be195c75e0c2cc705afc54a7109ca647793456abf1a3f5e20945&X-Amz-SignedHeaders=host&x-id=GetObject)

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
