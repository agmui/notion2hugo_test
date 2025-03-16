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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZGE2KP2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb%2FO6WI5CcLnAMIxkZz3yp2ZGHEYXk4nuJeRreCvHt2wIhAJ4o1BoM4EjYNtKtxgmJeHvNvDKyd7hba0G67%2Bh9i6u3Kv8DCDYQABoMNjM3NDIzMTgzODA1IgwaOSaZ4dVADgvyA68q3AM1D5zhZf3MMyH%2BnRjXHFwmUgIvzCDt02O8YpxLuhz61S6qD68mQKr6p8RhdsTRcEscVGLAOWAhX3%2FRhB0MhThE6ybj8uwFqwn%2BfnanGSMc%2BV52So2h74pDpaGolmGw5sg%2BTqUZSv60T%2F7mQ5oQKwD2DWjjnTgsRhU7Wps8abwsG9GTk7oKjkyoRnc3k67DY2zEoDOT8Eoq8mqMeOowUyjofQ09WQ%2FzS5jgQY%2Bp4plzR%2BOJAN6xWT6r%2FYFBDFsXZql1%2BVuPXUFqMLsBjzl%2FLfAG%2FwcFfLyOOE%2FuB85E3Ug%2FpHIKti7T8TVr%2F930ftWKWRreYuOYKXQpkQe7Bzk9mmZejTC5DYbYWLdce7soFKkaEW5F31h4JL8j06KhEP1BTvuF7CZS8DWq3zpUMiPivUtwWret292%2BAnEwnUEpvty04SdGn%2FgER2QtysMYp6Av3wibnBSN84%2BonPKElyCPBdoDKczRgL8S9bDggrkAtLhNUjvqE7BEmBoPYeT8hjaEbo8fGiNWDD2OuNZ172z2Vb5XP6ZCvBVh5bkAF1Jt8JWq5BtMllYHgvdx4tbTb34%2FsqgEPmVyq3mUyuM2mt2W0DVg40ZifCyFCtiNHIkfo6RK%2Fi%2Fzj0xu7CKdrtm0FzCK%2Fty%2BBjqkAW7ZlimTMTcgqo08HzbkAtxBzMdGTp8faV7Muj%2B3NcInDdmAEF8tsjjz5uKkc9c7l0rxeFzdTClc8CQMADZSDu1CP%2BW4DXkhj1PuFbChbSDqs4YasfFCroejDavyJqVM0QXY%2Biy%2Bt%2B6hNcZSJ8mDhshKqnTKgfdAuS3C2DBK0Ob0OlPTMgaX2wJw%2FG90jmtrK%2FvY2kltDPWUcNc1tUkyKcEww6qX&X-Amz-Signature=915109548648f37c86634d67dd5d2576642f218b8bc0797253001dc1a64e3a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
