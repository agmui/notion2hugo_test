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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2IZMJNJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl2tRN%2FTno2AVShn0L1acsCEwOihqUM0lQMAaO1UIHzAIhAIQh2s6imvnwT2b7a9xGABbLe%2FN8%2B%2Fs%2FfEBLBI0HhIuAKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyb7Ylqqda8XOrVheYq3AOOysWANHDyoiuxuETCezLfRQz1cSKa4MnuNSfnb9s6NzL83jEeaBSQLMai6%2FiIFlJhCW5AfeNfj%2Bpbo%2BMbXnU1bEcYfvThEp1Zjrm1pGQ62KvuKZIV5LQN9PEOhYFHGZGrTDOnxR6kDBzd9uPO%2F0Roqd7a9C5CnO5%2BIqZRo5Ro3m9wFhrs4%2B1Frvz7ZuBo9IXy7Lfgf%2FoMgWThkK9kdPsUbMEQDjUxtjMK8WCTnpDF5Rbp161FEnG0UbAb9KKfOvMzLEc4AQw6sSTsqqBUKMiyfDuLzJaDpHk4djPOw6%2BDzjFtgQavAjDl3TeqtMWiKPNjWGJjUdp0HQz7v%2B2FKUd3XhG1Mfri3WLse9cu8yy9TW%2FmHR88GipnA%2BWyCHnThfZ6dMKgbV6W3W4LbUfxz61xMNEct5n43ng82gPFf9l1IbdmkdSimaJllgYHa8lcoMgOE%2BXvBiUDqOp0wfCRjKIj1FMEpOV22Fxw5dJ%2FoO1fV%2FIQjX19N7VbN6i0oZOFV%2B6CFzTuc%2BJ5i8FdhlAUW8XVjHJxQJ5uiH7SAtoypVRNeo82Ii%2FOUW3e3CNRmMg9LA4WXORESQqs%2BIDb2kIhEMmBijdGtX6z3wAD1U3K1aj1D8Wh0VyDzTtbSvpXtzDa0rXEBjqkAahbOF8qQ5%2FfBvcDxXC8Mnll3rKLRTWrU7AYc8zY6QPBKYiCnsdigyX4VhbqT2%2FZ5FGMLK1Qde0j1BNTkcZKkL6cs66oTg995U4htkQtJpce%2BUWxdwqwpIWRpRvYXfWjISzWDjc%2FpA%2FUSc8dAZiwRJYhI%2B7v4Q0hIAi2b2x3yKZMtHZCPFccA9AtBzm5sHwWZhA2JZSsRiPRvKHzt0FqFhvMavRd&X-Amz-Signature=b149dd3be810c8cb54a6c60074950376fd0d4e674c3c0f8b797e9e99d5794aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
