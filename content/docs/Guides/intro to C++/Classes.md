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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MDN5TE5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDhIKejPtIj4zySbGFF%2BgSmdjO0YmRFzCjuKZ76lHPbkwIhAL4RaEzbnaFkth%2BI8OImP8k0agczgTVEWEJymICgrerXKv8DCH8QABoMNjM3NDIzMTgzODA1Igzjlt0jiUjCgDWdZ%2Fwq3AN4wap87s4qvGIoPlauHwvEWLzvvjdnh%2FUVb7pZy1NyS6RYUTH9YIaMTXDVs2CWIGa0cmFgxmVZyWNo73AzbOepUISGF9jbgJ2Dbhb3S1FGJU1x614r%2BTgglRhRLcuWU%2BdfzVm4MP3ehE2sS26uvKGFCc9zPHQ3P0YmcO6VMpkaoEG2UDFhYuOD3WqQknZqq3cwreEYtncpABfD6I%2FgHTFv0Kou7goLoTNm9wlao9nTUJjISyiR1Lha30vJqETBGw82xYgznotAAqmolqv25dCRDp9eye2ETZp%2Bb%2ByQegaDWCPYpCYevjC%2FduTpJb0VuukM8R4NCcEdyuUqtPvfbZrK8cZbukjBgybboUnkNDc71izHTE%2B4dAEzJdoxQHef8DT9sdZA33kTIYbciVC5OgDq3efPXwTecX4UJ84zsLEvZOwd8Lchs0BbvC1dAVhki4IX9otipERCvHZdFHpDhrnIchTiZnm90761ff0rwm%2FlP7IcqZfTu1iST1l2pzoqdn3bnw75ai4QSu1D%2B28oQGORmc5vbV%2Ffn6uELtZgZEGHQPbgU29rtR1RXoxfMT8DqtksRUVlsf5UFKR8xZc2XwZjqHWXw78zraWweG%2BRPSHRmKOa1X3ghryWdODovzDg6s69BjqkAWop07PSgkaqvLjmMP8vaNOCYZUvwtLO98Wsp1Mn8spbC7YXSo%2BYUt%2BAL9zHvQi%2FtUfmS%2Bh9aTEShKJRsAtbJHboodw3r%2FvdbYhlMmFbnFNMRVGiF%2BDhdzSiS6iNj922HncDtLSfi3PpK2zFOIV2KstKFfrfpf3R2FY77OGPPTyX%2FTuvQo4a4xSkw3ALJhfROfCkKnG6j1smeCSdoBwh6UawMBjn&X-Amz-Signature=0395c917adf257dd0fa61f8bdb2a4549822e1cfec157f4081e394f3419c6796f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
