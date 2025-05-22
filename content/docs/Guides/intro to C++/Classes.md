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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OMLAY32%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDO8sICV4Hci4Js7%2FoUSRII0gK5JgVEjlmCsDO2KsTeQwIgJKPLS7jRdyYC9NMLIvE5k%2FDBEwIsbvlPBb%2F8d4Y3G9sqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8I9w2PSKK4xJzmqSrcA4R6VckguHg7fxA8zX0d6N%2BsXtwFWBkeoAg0hviABX6aZ18%2FVNBVFaAoNC4ddY9s2rZS6BsvcTFNBjWdtou24WWV51andbQatn94DQlmFT%2BHq%2FuvT%2Bxom4TcBQnNbH8xXsBt6Neb%2Fl3oUSTlAWKdoAspjjS5jqWIbRu260oHlyD3yYSCZpqi4pNzmnhodpqTACUtVgKXHo9dlGziMCOQ9dmZ4rYddwJ8CO3AWIo71EVVi1k9ofDGQcGweW1UEJIf9nPZYIygqzjWjYrtcileJ0Oz7bOMr82PdXFRAdAfUd7pgolLeEJjFq%2F1%2BOC41ecU7y27b9mTiRP6vmOR258GUPrQol2aCE04mAI7bkkHVen7VDJXGdD%2BBwLVcZJymBPAESyb0nNIYecNLAqC2qjk2jSLeobdqJJAuLqAo1eeFZhrVvBO91U9U%2FIXyrQ%2FQqBI%2B%2FuxDVvU9%2FbVn2Bf%2Fbj0hndgRkTyYggENZSmlb%2BrMTTMbBN3uE4RB2Gqnw%2FCB2AsRd%2FYND0O7qWF4iTPaZPt6OnZqdZdHhyQBc63hRVcHcTxm4lM7GABwP80SpUsop4sXtugG%2Bhiznqojsj%2FJZww5EoeKdJNcsgl0nqJH4GB55pFNOU2Jm0TBAE9UUSEMMzivMEGOqUB%2FdAVt7fe48PkBxXYtUwqF%2F8UZqV%2BQpr%2B76mE2UffsWiWp7mTFPFPqGIkQGMiO%2B2iL2Pf6PlEuEcDW6gcmEp6JrBlfJIzOSuOD%2F69Yi3avlhRc%2Ftnj68T%2Bo70cJsYDwqMwX%2Bt5X0WnbeGztyy75qsSESzwv7h4kSvJaKd0TDAShueC09EZSQYyMwlbfvAq%2FOkZ5afWnrU1ClaZEb5kePsRXVFfMYg&X-Amz-Signature=b84f1410973cf0c1bca9ea45a48f57f2c435189c3a3b04832284071fe396cf7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
