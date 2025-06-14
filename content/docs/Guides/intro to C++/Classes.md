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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FDD2RTX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIB8eMCG0b8hOl%2FohOBEt2Usc%2FL65%2BmN7XIdBVWXBSzRZAiAZWGb%2B1F9AlddWZYcN4nkIW6LzbuZT8EXxQVYjnz9F%2FSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM1IhVqJONHkiriU5fKtwDX%2FubKw%2F1boq%2FGw9HAFBJW390wSV2fXrWyaVWGrUdVCwvozA6zNnKuZT9kvXxmU3HlZIGTyK%2BXBaIU3%2B4czr2LEriT5e1c4oTj0CN0pc0xhytOiarfR2UyEKKmlCddo9XCOupuMFAwkKROsmYhK6DTabZ%2FjnoTN8hIouq9tCiTIBKEbSdR2F6oyys3IfsZYpa3SDoCIOBAhESuQA2oLsMjfs6ftxB5o1ptabGNjARhmc5JHrWrDveMGhucbGzjDI3wVhIZmbGNfxfDG79XWqhl0MowPso5XdYvcRPrzunnCHyMuC5T39Mz%2BKL9861xW6cUxB9sh4IRb7x3Z9x56f%2FUpE0m9LziW8Xu1V196NMuqsWMf4guF3TfpXQDUUIBdiVf57uC0VsbAdbqlmQfXQRrfrgoknv1kp%2Fhts12Y7EY4pzjvqod7YAmw1JTiPfXyNcTeeRMEHGEeZ76ds9ZKDSpNNbkvxQcU1PejD9uoiCUZh%2B1haKCjQVk4dT%2FTgU5B14R%2B2bpdOYWssscRLdqcDLXeMOrSPQIPbc55bwb6mpMzd7qUfl0TV2XbpPUjGfrCAV1dtrUojV00jj%2BY7zs7skGvJi0VnIrzaoWP5ZNwB0rJKVLlx25bnOSijKz2Qwkby0wgY6pgEdzoHMMEzhwCB820yZ5qrmMeBy6sR8Z9EgrlAOBGcUqoTZNUoYoEbE5QfJxCr7gA%2FkE%2F%2BJuJjIDzvHbDRMiW9coNQ%2FmUSOlpTKoBmOxizB0WDGC0cNDVnYT5jX0aLg5EdJm7b2JR3OdlntGqYswnjnULoyVHrNXdgMvzxJdOAjP3BTcdPW4ZGvQQpjRAwZkgFROmwCg50kvPLXPYTnAC01q4EU1jEA&X-Amz-Signature=d2aa2882243aca24db74e59fd44bf65b2769eef0c76529167a4cbf8d20e32ae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
