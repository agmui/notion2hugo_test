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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665HZ7JEJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIEN7WUaZop5kqofNhSG5kpZ2wI46yzkVLrgGoGUBfiY3AiAswF8tFoQ%2ByaI0B0YGS0MRVEzOjHjEaRl2qhdZYdJqcSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSWec%2B6A%2BdhKq2VvwKtwDSxqpoWW7llhrnfrNR6xguKAzns6wGCihD55QmnEnmDtNMkpzexpj%2FkoMc3NLtPdEknDo18ePt%2FUSNB%2BXtOThNlRUcx35HW02X%2F3YKZin7hmgmAkUPwFbJ6kBLsGc%2FoWO7QEGzS8k%2B4%2FgccDAIohB0yhw1A2VzAVg6dxZM3Q6uqiUFj6JuBP12cheRyK9AZWtEcXQCMQxfx1WJyxExDOeD1FcKtbYp61tYuGuBwDsqvppmBHfU41TCVLY11wHPMSgCHim7sTU8HUilPwMaMrZK7lKP87dIsMU6gC94nXb0OI5AWsmzYRcq%2BYbH2tfaJ1sCCf0FR8pKN7aI5iZWZ8L6d%2FGPVFPVEDMjC7iVluYCrYR%2Bg0zTzA4Xa3%2Bu%2F%2Bd%2FO0PDBY8iKSEYaMjPoWG%2FH8aTRA3TxefxBxUsPr9BXteRZHrnwvyBni7PFP7MPT7bluJLUr6C9KlEINkSIlMdKKwDez9UL92FTQlEVjb8Hs0oKg0H5GLsDRSnWUUpIkbluEzViAIScK9LN2aORn4eRsNVmwCYczekBg9Tn22hUkxACOpxP1sc1PWe6%2B4IX4zef%2BW4g%2F8nfp3aFcazgfA6vKE%2BT0cFcRrF5B0jwAsbsWAXEZ2sphQHO0G%2F91dGdowyIeYwwY6pgEFmRWiK5Kjv5kM99Gmk7ow5J8DLPwP1%2F%2FMvIoUTrL7VkqLonr5kca7Y8UAnlEpS8TSP3fhw6A86wLXzdOVdaCw8orEgjQc9Q%2FvvxmzcK4Wwe0CjBrKidMueLkeoio0I5kblc87UZfaTlVNrINo5VibGtGdSfJTTc5vu5gBPSGgwOyHgj0mHJa3M3lRhbIk2z6XeZm6KkGMJtcSQQrVS4yfiCV25ocr&X-Amz-Signature=41bba59d077fd54286b520e48dd020869409d3deb1c57f95dc3b5e4ce163d402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
