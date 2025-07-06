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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THIS4WZD%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFjIEKiP61qECS8xpy4aMLvQgVUTwzj66ZH963WO1sMoAiBAbvs1EVh3CuLLObWSWzFyHtLCAWNbtCP7be%2BCJ5gvKyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIME2D5WyFNlANGruo5KtwDpBJzSCm%2F12U8v%2BpKV%2Ba6q7AmoojN8LGJ%2Flp8BKO63M%2FHz5TXT4lv8dS746MMBNcRJdelQ%2Fm8dAEc9CNHPSjmO3a1oHCLOh19%2FxGA%2BvmwkXlFyU8b4zMQdEBmVaZEOpOYP6CNUxRN3w3s2%2BkX3cxG7xrz1ui7qb0fPlQkzsGtCGJ4NRvJkQaIMDudK004aFveIDTeNE4lON5JT4QatzldAm8LxVzbcX2lKI5GnRYq6kghaxcFEo3JDp7R8l4MZg92bz46SOeJ%2FyUE8BFsF2Pe%2FVg7tnnDdkfEJPCBA0zGTFCz7V8fyVGX5Y2Fs6AhHiVJED2lPcNkffB%2BWnpGAu1j%2BUKXBP7a4dFZXnfD%2F0wvq5Oib%2BEWkWKj7X8FeJHJj%2BNO5ShxdONL6RDNyNaqcxcEy3Me1Zt74MvzQzYYfxQ%2FK8l6EQbYPAK8w435uEAc8dsJtSnHZCrrrJt2yOV0iPFutke%2B9M%2FVJWj8Q0hnLiTR3KAFBPFNJfDn5h1UTjLisuc2xVnFMzIJTD0txBYwN%2FilavUW08FePb1exi%2FxtG3BvPtUUQJdVoD%2Fsk%2BI7FcR23OGLdZGLjQQdOxm2Iq%2FZky3FzaQmVIUkY2dKb3WbaoIx3iPvcPtw0mftvcVLOQwm96qwwY6pgGqilWmC9%2FmaCZc8deStjsM1fsu8zGzznNVEK9CpN9Q6sIlDKdvgyqkoM2XbHH7UO%2FToFnYHrBU8wQKh9%2FSJGLhBVR651CqD3w4ro3HS4mQnbi4bLn6tZuBRlRvSrGhn9%2BwaaN5bTYQItXWH29Cx22uuU4yBFKeD%2FOuYQXVK3jtx3rtILLK1pXvT9sh%2FzsDIUXZnbOG%2FWxQIiR0VPq8C%2FM5IFKTi081&X-Amz-Signature=c32df06aebce0721032d7cff8b0d30f03a5fcb136864b1bf990ad0d9622c6dd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
