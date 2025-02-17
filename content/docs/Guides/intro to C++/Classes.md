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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4FNMU63%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICGr5D3BS1HzsjL4D32Yi%2BzgReiMVojuRM5%2F97pC3%2FWEAiBsbTsnsTDxJ9wINd1bvJQpef7v15qnfHWaJwNwmNzgdCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMCbevDu2UeULSOHR9KtwDoLt%2F%2FLQbBCTqxsggZarljjbloTaOOAaxcZRkGuRohduqiOg%2B900GydPrz4qUenIBAHWOqbNeT6kCRv9X0CdAKAyp1TEbsT7k0F%2BkjBlhwRRltkHxBUMUpTgCiDrCrLzg3YfUlTe79WNlvqgx6kixibyJW46OHj83HvArnlox7HEJ9GKHMx282Sgt4bB6I%2FhVdkaTBE19Vh8B8QilLps8FAvm9fu%2BFbdLlTwvH85JkZMLATG57WelJX2SYcGTzp%2BaMCIKaZM7zbt2JpP6SbcFiw3S2JhHzHMiquq6wXOBgbk1aUINHUSBFoJfPN8nmPHwUyPz7yViNWoLwbtz0GAK2%2F0%2BtUeLauhLMQN9Co%2BJx5KFbO1T5NZmnpE31KckbmwWR60tJwQBSnW658cEQgjC8bb135%2FNluUlYp8SU68ITISNvP%2Fiv3GckNtFGqqKa%2FooZLJqYFPiP1NVSJ1kxihzN04Fliutw%2BK1mECO9EGrgpSKjPhuW9XY45CoDOPbR7w7dIcOgGgCSiLyQJ%2B%2BkMQIMJTJfh%2F7iK4l0ENKcN4tBXL7bch6UnTbTQauWdP0CpB3LxlISzbU8Hc65YNSTDjpVTAFunUWqQa%2FHPWLGCT6P6s8rJG027YyJuVhSG8woerLvQY6pgHurB6U9D43jrsNVWVukMpdtPyDCFJFDi6XhTkfjuw5cLItInZQBBKdjy0DZzebERS8Kb9iwIJDpQyT8ZfbGYg2kuKYBbrH2l60GNTpVUTERT%2F79DIgYzQpY3G4GsWPx4qri4tCcFpHNsjUXlMrKu4ZTC8B3eTOYKNJUjk85ev94nHz3dDlIoPYZLJhdJvRVjdZ%2BciQQ0k64K7lQQeP8%2BRAs3eKecCX&X-Amz-Signature=9af1e462250523f9e1d42815eb44417fa1295606f4fc508552d8095af354b0ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
