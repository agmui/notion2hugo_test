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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SKNUOWB%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFRm8dQOhk6mO0diXjLIu83qHdVQ8MwCSsnZmbfYEdtVAiEAnuRVSwTVBSJm4ptGyZHD9jW5ttXbP%2B0i4WLGuqTxk%2B0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbrfAv3%2B7GFTrBj4SrcA7vC7ZQ5dlpfU3LMtSjULMPFFxid%2FDlzpLl6RaP1lQZU9ZW64D9iR8H4mWpMWd3fa3mzW7WT1ajWg7mwvpG%2BaFLWOWbVZV1pa5xZyC9WOfadGAJwHVuFTmKSjm3y7kFPHiFVNjn1YKqkiHOE%2F49iOb9x40wZkN3Vtu2%2BAySXf78Hq3c6s0Ka1e9mI5wOE5Ct2jpRrmq5IUr21es8nACGgjLSn52tbb8Sx%2BO%2B%2BBJRkk8yW0JKDPFPpgNDH1aDpA4PFdDrSlW%2BhDjN%2F6Fg3FTQfz7YBcGeFiZ8fCu28mzJrkmdgc7y%2FjY%2F8rOHpG%2B%2BpNCuyVKkHNFTNtT7dfQ64U6okiim2IIppYI0dN6%2BrLLyd6cKi9rV0ipp7mKmEUrcrUUGI3ctKzISlE1VuC1WKXqLJ6gjOvp5%2BFg6OLW3lwW7bxj1hB9sSHQwjxytw%2FSrc%2B%2Bc3pOfDGVgoDYiAzpD8Iy7zLh23PDVT7smbHIyKavrunkNT1VICBk%2BWr7HkcFP3q70ZfK5IT2On5e%2Bg6dKSOfligLX%2B0bR8r7%2BgzGdAYKLTJ5WIC0ZXzCwKHS%2F8tYje%2FuIn33UarmE%2ByGkxuED8brgePHsQH2cLBglDw06H8E%2BnUpLht1gK5HKBz8SjkYNMJ%2FHjb4GOqUBzomvag5nlDP8j5ReNeZTYKQ%2BiKpaMslI0DoX5EEdROELuGYVnILyGIpmkfHKWYKAI6CfUxo%2BXjEnIMKnUi8VbT9KN2YSqhIYQt8B%2Femfyg61kYaBv6d5NwS4%2BM5KZsqGsFh8NuPYHGBFa%2F20ddRFTy%2FPfM%2Bidu9tNMayvqmCzeszBNKf0OG4FaSXb70EE3w4ANpvegJa%2Fa6M1LAV5NTTkF0Fs08K&X-Amz-Signature=3375242327ecdfc7dfbe86c79d85156661ef2f0821ebf9a970d8642226fba0ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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
