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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZEOWYHX%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFccTNnG8JIPrOtJiq%2F0GrM%2FxmeNLREBske2CrJc6qMeAiEA4BOP3qcPcfOjBQNrC0vCd5ZcbiTWbaHuE0xrHqLa%2Fb8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDF%2FZId%2Bf1zir9TFCbCrcA8KAWqEi1ar5yRNgdL0T3RgEFMopmVVg1LBzTrWOER4TzF5Psl4UtVRBwxglgkBuoncKIXo2P49hgoHGJkHsZ1mR%2FJFvwQ0lZBE8J7RsVH1zi5EilG3lKxBJ6x6Gq%2B4alnrgIJzAQgGiUbRhbHXjvgecvwNrqK4D%2BKxFXiO8ip2aclv4CoQlIRfhTBLOaTvEZZJZ9izpLOMFLEO2Q%2FfjI3xuQ75rWDmfADBgKFvIGg%2FFiEvxL4QJijiglzBRLhWHv%2FBqPjnk%2F%2F7MNxJ8NiKlh%2Fwe2jyZIvuxbQHKQDsq94O6l7NdCX85vn%2FV%2FMVS2Ly2rPHwiyl3RKIFbkz%2FMf%2BWt%2FjhWkx85rCTYTTGFiuzHgzlkji9FHRcr0UcDclsCGmyNmQvM0NAT3h%2BtMr9GLCZu6nOS7Av8djxKu6C8e6%2BcQ8HJS4gCw%2Bruk9tZrExUzzk34%2FRkl82mjXZQzCkn%2FTVj4aJ8QmgdBiwzKZFCCtVk9fawsz2iK0LAqyfi2A1rf1mTSrEpwlBHozbf%2BwIzB9odRnesY94HcL7Ay72LGa2UPrczRy80fmLuMYinRsHWCVjgenoKNHzdD4Eke4GbqvmTdbiBA8HbxsEd1dKswBiA3a%2F9j23nCJZQvyjW7sXMKq%2BpsEGOqUBe2HovpUShQF3LeaIltTdRUJ1HkKH6bP7TD2fyAYBRqCrDeWKla5nndHK%2BthmeY8UF4D3KHiBWvBDd%2FD%2FS658B4V26hTfk%2BVjt4VatV7wFPPAoV9dgH7r%2Fwm1nF2cqlIk8mYQKBbhWFlqYAl5qJREjqd1Q5a%2BTtJZ1G%2FZNwHztAPKb8A7r7kDoZlHdbJi9e7CXNcdoxbV%2FsbLjAWVR%2BFcLVg%2BXYkZ&X-Amz-Signature=81b9c7025bbfc06e3fd0aa575fa13ecb94823c372689d773a5afd55b9cf432d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
