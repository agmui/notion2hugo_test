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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUUSHYNU%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvCAqeiBk0ABvx1ZNj5levA6Dhmab4eR%2B2%2BqPozdypIAIhALHIXDCx4CcX3hJgj7EHqND0l23a8uHJOoNHbdrEG4iuKv8DCEAQABoMNjM3NDIzMTgzODA1Igy0OKgR%2BR0p9VZpQmUq3AN9MbrpGmIlWK7A22UCNFmIzWQx4HH%2BX6wn94fTTvFpebimUofbETzALF4JraAF9I016ymhz3%2BsW3QKvlrjtIRe7wxDR9OPeE2SL8P60%2FJOO%2BAngOTF4sLBQjutLyC%2BdAQmx2kNy9lYqydhzQpx%2BZB2Vbj%2FZJGTn1boX3YSZd%2F3A0z8YqvWt7HvLr%2BeAY1ZSEnqz6Pwu9ZDAYdJe1j2%2F8MwynX991kNKvEmxMhka7zwfqLwJs4sfUd3jOqfUh5UsDVvccV62Tl761Z5slRusP2F5ohXkuFiw%2FB8QpNgY0M8skU%2B5yELDcE9eKrZ7Q4nesZ4T6125xG6cA%2BxKvTqP76fBu65tw%2BdWhLG0PQvdbJijhA6fp5Cg4I5i5o4TIkNNq1CwJLThcqkYB7eliTKG9MXsGllsflS%2BxNgjsAwwkEPdGNldfRuhBsGa7lZLdEo18KX1zh%2F1sY6DTVXsqblbaDpSoDYBaiaapBY62bCLlEnBFE%2BUTSgvf1aSdmozGBJjC98bIv%2BgE4yUhPH6h%2FwMc1Qwd3jHq22NbVEF2q2GZ98D2LzbGkHBn52G4VVg3nRDM3EnnetUKFlvVFMM8rlvRCOjTTb3p%2FMOPgUPhBjIuwn6fdU4XCqNHuRY%2FJgMDDSv8i%2FBjqkARwALQEsP9%2BmfzlzLdsb6S3VMIvb9aFH25FmmoxXXyYB7kq01MB9CceV3C1yCnwjdi3Wh24sRuXzVUvmlYNVBvn1nnzjstJpef0%2B%2BzEp3JDdlNjJbJ9OowvxIIp3L2KEZOwwZh2v8S8n%2B5%2Fga4NZp%2Fze68vvPxf%2F1KL3jWPNGxs6kMKwgcn0hb0rROkvLqXeB3Ctca2ihoRaF7a0%2ByahytkQn59h&X-Amz-Signature=5aa0e402f73485bee07b579b5bc143ae8dc3bc226b1bb7fe6a85bd0c14adc393&X-Amz-SignedHeaders=host&x-id=GetObject)

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
