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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VF5ETOY%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCUQh6h5AzbKJGB2HUVrfn%2FA9Qxpa8zP893KOMJ%2BMcJagIhAMaP3FXgQbjGgi9%2Bgbly%2F4ptlexA84luCTmFJCGs%2BekAKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwS2kIB54%2FNl6HCXc4q3APDK9h1zodP3euwpaw2cDGIgcXv9cGVJ849FToGxWXD8tHWzPYbR%2BsnkxLtZJrtP4638YAP0ahYnlOTpEKB93LfrnETaTj7C1ooc2xIVWTxo%2B7P8Xd5c%2B%2BwfgLr5zdK0bSqoMGCsdGPhNRA%2BcETD%2B41vh1EbsmacaX6hUUdR82VMWBVI3v78kajeWCnCy00fXBrX5IIiF%2BMt4HiLaDo1BchXXcUFPZGTLSawNxIVe6Mr2docXtM4ynsmvAfDBVzhr6%2BzhzbDYTGLLg9xCyniJlmX%2BPHKd6CdldUQxyHKE2SzlvRPoeyrd2QIjCRtr7SsD1TNdMpK5CRP0gvry5HPydcVGqakRoaDpIZhvQP91mTXzjyYIjZx72yKvOuL5ocBPSZm%2FaZBusYx1lA8D9f0viA%2Bl3XjSATGP2X9F5RonYBpWySEzPXsYx5F0CuFKpdmau7Bzz99OSa9fAnCToqdA4YMyz52cOVv8qmMVnXe3yCDEvIKtfKSdcqkD9SsTwqOTCohTs1HXAHpsvFaI8Mcf1dzTxdEsFKlinpS5rq7DfbK0ZLz0x0cEo%2Fp384QteNgSY9skyKI%2FDvSstnPhkHNFZXNeolT96lm27o1AvwHqyiNXXEVDfo5rxTlFy7qjC0i4PGBjqkATksCtwYH7Pd6Ca7swp42f71aaKPjGe9hOfOt5qBa9%2B0ahU81J6Td0pl2zap0z6gtVb2LIdWRAbC3QCjqPJZahtgI81mq9ad3qdrZhF0eQ8qQBHxH%2FUO2Uxya8CrGLcbDx899UEnDlWeqFz90WtRQ1YoOlsXdxjIQwNX9iAk575JIkakvsrKwpfVtznzEastNnGiYZXLzCle%2Fo4K9gC087h%2B1cLq&X-Amz-Signature=59396ac426d5534a73e15fb153519911923b1c84b8f83ff56e830c13cb956451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
