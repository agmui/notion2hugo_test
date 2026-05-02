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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C3JT2MR%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCID6N22D2N0zyAYlY5jYcptIttl0jummMX%2FNHN3GrSSHOAiEAy1WzeNfl6aVO2iFpzi43OjiEFHkoVmviMi08OzJVSrwq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFHkO%2B%2FR%2Fp5MohxU8CrcA%2F12f6fgJVW0cDUWW1vZBSzP7hqbdmFcKVA8%2Bs8uWMJPQecp%2BbE%2FYU0LVbq0EOBXLze5POFvLq0Ii3eifXuiU9gqJyzrbH%2F235tpwtv8EepRpuh18DMG1UAQ0PBL6%2BnjoTAxyusaBW7%2BcaY%2BoVIC1x6h6uRVY12PH1wp4tfiCh%2B0wjDvEd7%2FPf1VZrL%2BZPcHusDr%2BUaD6zlaDpvtW4frfuLd%2BThcUYXUkskYvIYtrH9%2F5zEznQAjTmWCBByd2qkH%2BIw80i4HmuefIm4MArHsoXNZo21jl6ZHcQC1iIaw%2BNBITLUoLr5p%2FF%2BHMz%2BCqghUX%2FK3ChqgvrY1cJbF%2FS41WKTmSoXxx8PxgXTYvOIpbID3hwiZswkdevqrsZBMebMNtN01UOD%2FC0yTYRvMoEnKaAGwjnZaeaD%2BUEFsaAhjUORgKi%2FQS3zqYY5A%2F5%2FU2KfaL%2BMF%2BKMtSWU8jr6l7nX4XptPBA%2BK7JkaBD9ipa%2BXIDl8S7vDd3LLG%2FKWnb0J8k1KOd5aA3xqAc1Kb9GBwSVP2PJUjXq4Z4RCKbZUWXKUswbCDKogkUuQFCnPR3eb0YqlZlOL%2FwQSNWWE6mval3OCedsezuMyXl%2FOecpBSIvqi1pQU2zx739fqzEOnI7ZMImn1c8GOqUB0AAj7g92ThFez5NRJp6p5a4t22gDlzSBXk3OBQSvj40VIK6aYFqAPbYmLd5Hnw6BBy%2FrZbFECeNxgOVm9EseA0kz%2B3TTTmO9oBILlwHkgRnfgXr7nHZ%2BhVVnM6jLjSItchGUegsbs2ZpQYl%2Bz7csBy4g1B%2F18%2BTKir5oDIxSXjKygql2akZevXoAf5M1sBX9H59rIGAfQ3zUr%2Bv2HGtbRwLlm2q4&X-Amz-Signature=10c1edb2424fa9fe00f6ce5207cae24cf8b4d573449c3ec6c184837e5dfe8c44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
