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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMJM2F7B%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHxKiyEvgzOK9ddkOnVJ0PAGlzoIFShJlnBA29dOi7wAAiAPYlHl9vpysjqXFzjGxg3GW8mKArevj%2BZMzVJCVRWHNyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi1FRDvWQeIS7O2QvKtwDCQX5szFmkLrQue82T%2B5xkQypDsfBAwgsZ9V1GKBObL9iY6RZjv94twidhxLjl5it%2BpK70YyGfXRqQx8kANIVMhHXjzUDUekoaw4ufwUiTqPlZV8ueXmBTsdV7Gtw9vHM7ZEe9JpW10TFZ3tUWlF02Nf87xyXxochvUsEoJhyDFW4lAXTYSal8dTV9itQCiUqCeuu3TI9jwHeRMtfyWo9mRzY8oJ%2BQmRotJ44eqEidmVjc9xirM6nkWnrlJok3B5NNiir1cl7bUu6IgXEggbwS9gWWixfyPFolhhIMgCs527CHw0TXkaUKQYT8FwFlX4We6pi2NGoO3k4PFYEAev23SUY2fG4m5xiG88iHOO7TmOeaQOlPsJYyKVLMSwkep0BitxWL3hq0kkH9WLGfDhBWvGwYl38b%2B5nIUdtwIHdXyPH57sEvIXQJ%2Bv8vXuqFrqWD4ObUbFBLO7lCyDt1MJVsXyEHkqRxVzgfeaNDplqKGILHgze8KYhd8JWSryDgtv7AraqZwzGjFDC801EruDibO%2BVIPcyjEJ4PL1l3mO%2FtQXBJlUf2H1rDAvpNBYH1lnbW5Y%2BqdRKyvJci%2B1GXFA82sokDg0wpohoPUXdlfRNo58lfL9KEoFHdTpfPRAw5YSAwQY6pgEscS5HsCc31xyJfROc%2Fid4MYhB9hkND7XeGzCk%2BkYoSp5n8jQZE3i0pjJpi5AwF1UQyNA%2BeAv2TuK6b5lSJLDxebh6mr1%2B4WpzEB5YAYEDHvbvOhYayrdWWDGUx%2B8MeQimQL2yECKy3%2FNVp7XOy2foCT4OXxS4SJaXmBv8mYOeDlEeaTAQTfg0bERTkIvpjtrtxGEe1sf1C0ZTPEcwQmM%2FknRP5tEB&X-Amz-Signature=52e6db721badb84e5df158a3fff43bbecaf20085ff9a861692a15984166f8a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
