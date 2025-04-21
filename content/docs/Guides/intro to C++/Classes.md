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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D2XNG4A%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIGhOjRZRKt8995NJ9GFmAvw0Qnabsk55oSS5zbfOPZU7AiBYEtIQ7yqMmucMSnELTaMWHs1mDVfzmWXFLf%2BuKR9gVyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMECq6x3XK9FigVVBHKtwD%2BhcwVkekd%2B9YoklLqoo3mTfhkO42G%2F9AL3MiZjUYfW281VTqnRDUyScwg3G2jBiWe2JKTXJbjTcE5WLKu%2BMwwRTTl5JD7eV0docXAos1ojW%2FLbQGoegQHsOyVQqhYsYGDl3NmIU0Y91yPrMGpEU%2Fjikq0Pvmv7Vrr8Xp7YhmAWtaUizpwL8JRKmiCqBfEfofwCrSXUplLayXblEI9tkIBR3MuZpe0cY6%2BeL5WAM8gOw0Jfzz8Pb%2FAx%2BO3D%2BIrpetc9Ps755vAvnDOy7wL3eN42EIqyB4xU7jR9YQZDlnQi7W2eDzhaJGmp%2FsJhrf3O6rntDS2dz%2BCeRm6XcVnbxKfOZ4lDyvadcDJ776kKe8gc5CORfRfs2Jt4kEMzUjciMDLCwlFtMfTDeYawxLkPrtlban2jGwlULxgJOut9b%2F7IpyF%2BPBwzmq1saZ%2FB6IeZzXzJeCoJ5jog%2FPRW3qErFjOXu3oFr4haYEL8mHLYuS3m68ADTy4uy56jVcwwmzP%2B1%2FAfpaBa%2Bu0ZWBd5CNNc2KzdZUNEvZTFdLHk2Bdvz8ZYZjVbwWGeYo%2F4zWfH3nY8EtF0IDxSQnXvvZ3w7cmjXy5xF9rk0T4WfRW8TLFvFPu9fJDS4VZY9fNDtJ17Yw%2FJ%2BawAY6pgGPhVGWzXy5VVNsWyVaOfU4mUXthqExFwd5lQLL67Sn1G6UvehEFudcAWIyOKCY4JHzvv57%2FfBzHAst8WXqtU7fyyUVTfGBx%2FxbfZPXEzfLzcqlOGMgS3ui1qpdts1Co6JX6oTWjZRbTxpB0VGAUhnOAf%2BXh5IzLmTNXy8dlH14q61JikYEKXFX763InbCXTQFkLNXK3OJhtFT4O7gn8Ey3D6O6vN6S&X-Amz-Signature=813069646a83b6e8e0fcc6b414a4c874d0bee17bd80280e59b25f99594130462&X-Amz-SignedHeaders=host&x-id=GetObject)

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
