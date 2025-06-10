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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676RMGUBJ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvZyZQyRNwK9wRVXY%2Fs2AbxMbEZNgB3BHqrq2S5tbXMAiEA7imAv7Vw9PheBYaRTmK6gPm1NaHqJO4dI4ffFoLu%2BqYqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSgOq7sfBbGqB9O8CrcAyDC9%2BQxUXSwWdfK8NLWNujYwZTEQA1hMmgjUAvuQqJHv8U22pBDKrzBRmgNf9dp8jdNUM5CdGxMilzxXZ9TJGPuQI5ZrfR1VHvC%2FWd2KVR5IGSgGOVo8JIIaBm2ckqad5pu%2FLv7RwLFNfHVKG%2F3zsBxSFRQ2KdsmZdkTtlds%2FMjmEfx0n8xDIkyVPnjDkiyckvHSye1KaGeAOKwtC7BksrfMR8F%2BYuj2Z2xHxGXHQnW%2BvKQxM6%2Brqm8%2BzPYzrT%2BXjvAy2wde6BHMPurHHhSPEzHZ1lpdSQQNJCcZ6seT68YWRmvx16jcPWVfvHlbLGo6dv4fYWIOvgjIaqoCReZpan99RsdGBLOlgW%2Fdi9%2BLNo%2FwkNipTdcDAsqfDGBJu7eljVWTMSL5UZNeYQn0IImDdKqpgK4KxNn2WKmjo2NvaA%2Fruyx1CZzQTfY5tx8G7zWGt5NvPj9lzPhXJFtaVl6DcUUHEfiUy1yQIe0bGMED2%2FC3PWPtPTtbfe8n8tENfJR28C6mcy2Qun8HoVTBxRjva0pmFetyPliOOfzLjxpDF2crQpWtVMRf1rE0Vqn822WeZfesmV4uTn8BNlXa28ZwI3N%2BqN2b2xn3zGdH9dHc6zrPfRWGwbhlmtIxpeyMKXwncIGOqUBRVJMWf%2FKdGVVi2CLC9mYZ37skLFwZe5F%2BpYwb6RwopEhDdGp0WxbjqEwEp2fR%2FGryTT4OsI8XGLjIUtgA22CAURmbOpoPPezqp4mqQS%2F1b5sS1O5%2FH6N4up3k137RtGysojUx2zDVqCgvGMRb7BN2PabDyA1Q8iblAHWO1RPVaF5XN2lIcRYLUDoeRC%2BoJxqx%2B9UGAxa1JZrfFYeMv7NToBughL2&X-Amz-Signature=e17d43b03fc0cc0d3f9a8e277cdd31f4ed349f18b0761d124b1edd1c34020f65&X-Amz-SignedHeaders=host&x-id=GetObject)

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
