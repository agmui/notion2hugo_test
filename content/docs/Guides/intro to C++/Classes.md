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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRNXDU7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbg%2FbUWz9xHNdifGwNK92R%2F%2BBsU0EpHYnrM1mjQSjJrAiEAvh59kG2ARyybgPE79ddZ8EvKk2YbeN0xsAvIuOtGJ4kqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJALX%2FLXEAcNaS4UyrcAzGH%2BSME99xMNnCRYiM3txz5sBfV6GgeTWch1DBE2z%2BMMPEwCV1rKeNVgGiVYIyx0X%2BuELzeIVJJn76JEmHOybW2iaZF%2BEiZkHthlm3h%2FwedSOK1dvkvdcrXG0sZrN%2BaQ6GNOZAktm1J0kPYOmzBQtnpuXBprrMDGNgU6GV6NuvflfxojhZCzsrqpMpNSgzIyMh32RejRnawEC%2Fklm3BnGtTfjXsimU3ffXkh0htWJAh1ZlJTiCncj%2FzWLNecGA31Cyf59oClTAVQKRZzNQNjPXdcYtOUJC0T4Fbp9crElGlwAdvX8wsPiA%2BDg5BfzOk%2FSUAzs84rHmIkxkUaRpvwv7%2FEY6%2Bwflb5FZ4jZUh987W%2F3dI4270jV7OhqUgIJvQeJXIHVxQrapGlrTOKl6GdSV2MCtmU2k13i4MXxtk%2FmIehkeVW8HjPf7jOlOeT7oY0J0HnMcp0CYrX%2Fr0TqWX%2FPf0bJzTFshHhmztB1lf6eaKRzQRhVm6unlwQOvYzoY6q1I%2BfQMxVRsliN9nqi9Mnh%2BsVGm39g%2FVDLXZ%2FyzafmIziua4lloKe5t6H3Fjj67%2BaXHbZBfib3tSdiyo6trey%2FxUBJXbgjPgKCIj2MizPxa%2BuloJtbtZKy5t2sM7MM6648QGOqUBtaD4f8wEJORoetADuTahWG0fM4F5gMpZLqf%2BmWxAe%2BDK6yX%2FMju%2FRS8FplVKuEDdlqEMjFHbq5A0u9vTwnK8FIgOa7k%2Bn2VKrCRMA7eDXFUwp%2BlD9LWpAvNy7EtqHzKZiXxvujXme0HZ5OBxbt4djBSZtMEESkNWBqoCIjdpXfIuMLSsX4w%2BCpppFDS87Y70dUkeatyWLugRc8cG6K1YmAeyamTp&X-Amz-Signature=c450e7a5c2004577d52d85c606dc1f82efae7a5d4c6a75a233c4002e62fc9022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
