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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632IBNSHS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGUnCZGamuXOOgFnZ4iPns5XncR3r1WAtgGcyejZPpPgIgFe0%2Bou2ZsixrYkNuZnOXkAhXDq87wS%2FO2FS04f3i%2B80qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbMq%2Be5xfJaMh5PyCrcAzFbG1qc%2By9BFCezVao7ntPeduNaOreA1Wxusz9s7q3YFBLG7%2FR0RtWVXHMt4%2FOXObaE2Z5xiTtj4hm9zDsC3rvFXg2FONPp7nlXGxyniRoKvo3zk57bgoOajTMbXINmSBvkwndsmKZLPaxZ7zS8UePoEGad3hroLjaRJZ0tioff%2F5OswM7AvqApCrTWBY0qjy1hsLyX1inj%2B4J3eK805Xx7PL%2Fo5g%2FGe5U1%2BUfDyeLn2Psdpi7bo4exOYmUMpFpH8GldNukdfolrp4wChbbyowz7DcJwuuwsRKX6AxJFdMItUrabqMFxCKKVrXJ99N4XQ15G818jLQitG%2BnV7MkWgQc7RxVFZj8nkmOvmAuFdjIu5empf2WLAjPbYP3UvbOZW0XR2IK5ik1fjuxinvx3RBG%2F9IOZTrGIbg9e7suKMHQ2pQdETtsg3e69uhz1rm64ySiBGnlA0hVDOuyqIK1y33MGcjKPbWxc8ms%2BFExiMiNygndIVgZqblHmYELJc8qyiDg47PENzaKQ4U2YascDCjGUKyfkTZJZXKtImVaXiWuGS7XXgCJxPCtMn2qCc4uxOGnxpW4r0HmxpcO5Q6lvGLGcxVpkdkiFH%2FCYMaSEIZbNAj%2FjTC2x%2FYPnhX7MKux97wGOqUBv175ew0K6hDg88fCouoRUXRG1f7T2U%2BhQC3t52%2BK%2F3b%2FJCMMSd9s8fvK2s5veQWe%2F42QEd8tuOjfK%2FKi%2BbE12hh3NupT5MhEWIdMAMgjrLkze6cb%2BFoKXvfr5C%2FBO3mfML8oZ1aQD6Q4XwUAL%2BGouFkrgYfTlKjRz9QMt3MnXz9Mx8PMCxrnfJn0DCx02KGnjKK%2FMUE8KekuColPywahUTj13hdr&X-Amz-Signature=f77f34b7c037c9434cb3172e427f5fb9d41f1be5fdbf40d029280503049dca91&X-Amz-SignedHeaders=host&x-id=GetObject)

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
