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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN5QJKCS%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9ewVZ76SbU83JLXe7aLZnksdCgVBQJ9n3Zl4XhaO%2BSAIgecOWQLmGIKQtW9IKBzpC%2Bkbj9Zpp%2B9Cpx%2BKtV%2BDwFI4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGO9o1VkASEWZ9e4SrcA2ZFrJRP%2FaUqcS94fc6QVDqJfMz4Af6XWUNJW1J862WZBM8the7veqUr2Y4Xlgj6Zo5lhv6xrwsB5v6OlLWv%2BTrhYbb2om3yNowyemA2%2BoqBfszzrYGdPu5r1TiWAuXZ83uWx1f%2BSI%2B294vOkaYAvKnERrTvtLt33euia8Z9ocP%2Fcf%2FumMhK9bF23my8ZxkDCOsmhOxJ9sRkyZnBfJI3oV0gsWHto5jFX%2BJj9cAJpOsxBf2jzt2PWgki8qla%2FsTJfH%2B3tcjhXtt3zA6Hx9RBn8%2FHGlC0W1KRIDiyjtM2ZgVGoVTQlo25zXwM9BfxAzolLaKi1LWJmK7x%2Fk7k0XCOTUhVK6Xck7aj1g7LlPbqUr4IPbtPn6Gc5s2fR72yjIb1YpVQOQRbVR9bavAVK1%2BFOSe0o41Iw1KHP3FAajx%2FfP1blihjai%2BUujVRk6z25rO1GZfl95HtEID1QlPQBZQLg4RLRaTGETbpSRzQaxkWE05Mcc2%2B6GhSp2fnjmy5m4HKyd%2BDKL9jKHUyHTD29l49BB%2FP9ysWNrimph5G3aOzWiJwlYHEZwWCRy2wwPH53s72iFByWldUmCtJLAmnC1cvj6agDVWFFulV9Y%2FH3fsWQSrP6PM84EV6Fm16VQdKMKGem8IGOqUBJ%2BqiDHPLRYMwqGv1iAXkKoDSZNdk1Xapks%2Blt4xW4DtvmNE0dcQwjSw9IG2iR3QaJUrNORU%2BWrhQ3g%2FZMizf3jsuIw%2BiM0S1djbUN%2FmiTb9TBQStV20x%2FkA1RG5NuKE0UKWDScxjLZdiqfHj%2B2sVO2rewAd14FKq2zRbMjjJlUJ%2F4qz4%2BY078Vn3S15rz%2BWrt%2FKk3M%2BXQxHRG4i1qYHEnhjkNEn5&X-Amz-Signature=e197479bf31346a4ef89b4aab47b0d813c79aef467f3ca6c3abf958ba901c1fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
