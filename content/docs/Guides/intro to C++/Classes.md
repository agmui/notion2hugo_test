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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PJDWXA4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRVFKY0VYZBQzswcS0o%2FeOgnnPhMGbOrnR%2FfDjuChB8AiAjMEs4eLohfV5oeghcjYFc6kLbQwWfeiIjyJtF2ckMnir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMHJvEp6LMBi4DXjH1KtwDjZp0Up%2Fc2yGQ4KpsKzQBFqjRz7Opirqd4JSOA7OHUmAHbAU%2BJJ9PkmV7pj5PypBCp3djDxJ2XV6xk5Ao3RySeoeSYh%2BaXVBgpj3GmCKwm4i6viF5tI%2FHmKBuXpWJU7Fv87DJo%2Bo03SguQ4CyVqJZKm%2Bgkykt24FbT3dtG6eYSgUafsc%2BCOGlm2ED2E5rV7ySVPINrSKeuUO7zE6OFI0LXmf8oUkjo75BF%2B8iBYLDBovJdTyg3Ir1%2BXix698SbPD3Ea8BNPCNoeJ9yxr1n5fNciC3%2B1zprQLLkBlb9a6XPfbJ37Fk73MZpERZETj4%2BRLMoYHZ7h5a34YNd3s5gUx3zx6gZZzIreax9RQd1yD7hTFeNu8Wwo508sqpRwZTStomhVy93TFU%2BANQDAsYtiFAQndlNRUp1rLSBa7CWK5VAgf4DtpiPI7uKmf8pHRpboqy6MeWQ2T%2Fe7nb6qhrpnpY5eLzn8AlcuEBiVqtS7KXdFuQCD8JYUy%2F0U8XfrA2HMMMDQQ1WEYSe8Gxbz2q1h8dlWNT6Jw%2BoDJgHG2W4gvUG06b9O29ugm79h0ppgunDzERYy%2FkzsSTr%2BZl9HLn5D%2B0MnCpB2c%2FmDfECWBcLXo4gXcDlfK2n2T4FjhQca0w%2Foq6wAY6pgE8q7RIceCRuQkzXn6ebvpNO48fhKr5Wt1QOOBioXPP6%2FoeOhzacdaqDyJvVN3lKLmo7YGbLnKT7tKs45FkTon0N0VW8OCE2H%2FD%2FXDrzVD5q59NRh4yfd7yC9np4qc5MaJx0c2pvHGUgPESKaKS6G3JGNuirJ2xRAk7pQ7EXDmndgD7NINtt9q%2BkbRX7JMT9t4QBg4xcvl%2BDmhpyLhsrvrxqXq40f6W&X-Amz-Signature=d01c3eb682c2fa4b6df29dcc2644d3d89da03e8753fb8502b28f88e9590c3075&X-Amz-SignedHeaders=host&x-id=GetObject)

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
