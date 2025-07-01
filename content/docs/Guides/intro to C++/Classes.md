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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ES3PBGF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiB3t3v1zP94yqNrHAvRUoLuGjvgF423jmVy1PuWpzIAiBqWmFh6%2F9EuY4rBzb3HHiiBolD6YMUFHbO6lMjuQqZ%2BiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8Ybyb8k9pjVccNfKtwD7d7jwYTpMhn2s3kTwNkdoaB4jErQ7icM6AOb1nPnaCpHnz9krNR6cMwFkQiAwyG%2Brwj%2F6P85pOK6114XFHWLlRJIfB4jRCisoDyiBsHIxtPX9XB27R9pPhR78urPWwcxOD0XrIpdlM972nh1PEshpSP%2Bpzg2%2BqN0Jylq6tWjGF7oT3%2BdKikFf3NgdEEWLx89eNGdsQsab6nhdsuibi6mfYJyuF6Bcr0vMIVxmCB6Ylw5EfCvRNbguVcUpicI6%2FzBd6o%2BWjZgKD71%2F0HtcxZwbF5Xtph2lIKVWR4iLcXfpTaD8UqQdkWnpBXPPXS3tAkT54hz5y7rNXzRq8yfP1V23Qrfhir83T6t3kTt3%2BwP51j%2BLrY5Lng89XEYmjxNiOhDkpWLrVf0BNQLMnLF4rESaBqaQ7XzY2BwbQny%2FPqDuwUL4o7bUab1%2FV2weXG5bof5TdHwCpoW7G31%2F5Ky9B3ZYU0SOHIO%2Fmv7F5pQZWTYj9xDOmal%2FUJr3lrX%2BcTRgDyDvJjkAq2aR3lESOtFWQnrtp2rvXkEUFB9HiDenCcaSs1MJJ6tHIDPYVC46Pd3Kv9T2NuTQF1kGIvMljAPir4byRUuG%2BhlbvTxTqeEDI1XGjKk7yfNLabwXuxs2zAwtMuNwwY6pgHoDT9YxY9VirP%2FKfA3WAEMLggo7NmUKpF8zrhJNA%2BbUxXd2D%2BKrIjC%2FazoZwhaV0Ii7w6C6I7%2BkMMEGqhEcLJj3XTkQGOytiBNKKymZAP19ZpiUJLFe%2FEwAc8K5LbXzMWjMMz2jRDV884GbRqzC60x1jPz2%2BeVRbl9bYRiUk8mfptaKcc4VftCLelMxRldH7qTPlw7b4Eg5o7Z4uBgVpzNklLBKsMn&X-Amz-Signature=2b921ba8b16315986dffc0a567fbb859ee089cd3bc5f07be17128e749058322b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
