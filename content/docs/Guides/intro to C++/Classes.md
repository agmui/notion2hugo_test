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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W42SX3O6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDyrYF4pn1Cfmzr4x2vWAGjBDutptD0or6k2ZAK1kPZywIhAPs%2BUojjcIhENbnTGz9hdNMP3DJGEwXy6bt4ez1WQ5uvKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FLCyivDIw5KES49Yq3AOu1BgobiZ%2F47%2FNcCHd0UYxMNVz4rrau8v44nSlt5ndfj0%2BioXvjGnfs9t9yyw430VGSShQo9Ld4g8WrmrdKi9uZWGSKHwNHwxCoff8yY7oDP0wVkuJlUeeM8NipsUudU5NbKPsVz050TycKTOSOsYnUJ%2BknApNo9afjiwhExtUdRO61jRfnDDKt81dXkiXtzNRB78lZOGSTAKVptM2Ew136ZENLk1vx1QVj4bu2HoMepYChlU5aZL3Bu92RvwBfEKxd%2FgTpNkOZV6pdaaZ7Fc3WpwWp7ePBSKwfSbHpPzH0zxBq5vyOViV5fD7ObQvacKsGCNznYSx5mbhluYKADHimiX35YR8GMALErjk5oPEB2sxjpeqtB6%2BaTB31E9KyB8hb%2FC1SNA3w8qlrSCd%2Fu1jp42Lr41Ufv3vEoFS0hemMy6kiPeHbH26KdZo%2BbmWr6B8LeUu6pVXW0NbFc6inCPPYeBvNEALXFwtBjSQK9mtf5NW%2F8icguzkD6fb4gHmSSOw9ILwLSJxNYl6KiJvLBqDBOpYN2oaJlV%2F3ASDZj5IE7QUxBkmAUnsWG5ln%2FBH1jJJZtalgVnS%2FYBNjuPLtE7ymawlFFDFJaOZ%2FLHSwtEpLAF3XT%2FpO6G7QD1SSzD%2F5dm%2FBjqkAfSCU5WR6f6NrpoKsWn%2Frm8uCmqnPJhuAue4czMuuuc8W23yegbk%2B3gO0yPX94LHJ22IA866razeTd8dD4c2x3TScuLmMDBYmCj2%2BMdYpO7qFffyYv4cU32G7xWL6hvhhlaE6ICGYLnogXVKAV6VtKQ%2BemwkbsT%2BXoRUhNuUoktjz4YVQ5pDspaUxOExJSDOSZaAU70aaXdYRp4WsTJuTuNX9VeW&X-Amz-Signature=c2cc3d289c0ef390caf4af61ff1885148fc2e139cb08b83a32a2ff25d066bd7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
