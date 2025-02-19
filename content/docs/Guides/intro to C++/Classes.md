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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OLBNBKJ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIH9Jw0v2ozj6mRRoWxNrGTFxpwm2oT2O1U18H15IBto1AiBh5SifEmfVf1Amwo4ODOCUwCh0roZezHutuv2V484xniqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvna%2Bf4aDDSwCWRyHKtwD%2Bjy6B4JuDNYk6N%2BwFJIlZSF6xWxYu9CxCyrDK%2BAA5AbpAHOb0NUmwpZRrEzIW45GcSF%2BFbdnVxlj7ruKxMCaeOIU3r%2FPQGuOi83L%2BDW5GL1ucZin6M7m7VWm2fxmSXg7t%2Fuvz%2Fhl2FcLhLPfcXsEwB7yRNnS10eiaY5Nu18Od5bajBXVIJkx%2BR4b8zP1UpINtbTHeWKXl4BBaUJuQnleBIVxZ%2F6iIihZn1VKWtkslCqukQDJ6D0U8Vvaxoe52e45kRKTRQuO%2BzflDZ9Pi8zwl4C5zv%2BsCT%2FVHdW%2Fl1dgc5leN%2BhHkqD9u9mAaEGwKqE%2BTfq85l21kSr6jEl32rM7faXElrh9KrqrPPRpRwODI9W%2BTsZYF3L3VvtEbd%2BwE8aeoXW937sqcyJBe4MvFQzctatwujZ3a5TsBhrluQZhvDiwBkvJ3fBGnIAlDal9UEvjw5UUqlNhhhiSgwIfaDoiDVAVCV24QRG%2BWy%2BGSwLsrJkGRAj48vPOwEwP6tyxTJwNTo1ySLRAqu333ckDLrC%2FGWyfxN4dxubGX%2FA%2B2NzO%2Fe9tOqNbYqokvIzkA%2Fd0hB8ff4qhi8E8MRNcsd3rFguXGGTov2lsTb5lLY9UlM5cRz0PI%2Bymm8ue3drMyV4w1bzWvQY6pgFXk7uB%2Flus4hcqYTv1es4kLWlpHyTQ7oga%2BNeff9UPUiPsq1U7kz2npOe81Dg143%2F%2FVjuoWOyoAWOnaUsGMHNoSJNdP9I8ul1yMemPDIV1jwtW8dMBS2AloZk4CpsUMX2oQYRfBW%2BAe1wHKkigWM8%2BPJIBHKMNz%2BZ1qeQScUA4Hz%2BrHR67xqFLi%2BHhmnA7%2BgFvQcVlIhurERdvmR1I5ReDQVQNM7qI&X-Amz-Signature=37b776951b1dab2c4139c5130b89156e55204068d795ba4ed1cea183220f762e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
