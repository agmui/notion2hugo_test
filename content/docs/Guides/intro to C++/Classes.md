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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667L23EJF%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T004947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUeM1AttN6SvYa3KC99%2FfAmBUu%2FenQR%2FbCxxuNw99otAiBq9N6IElyitftr0S1i62QmR6jQuY82f1myr2WyOwA0qiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGxcRH%2BZy3Yq0igb8KtwDtkYXCTL931Y2VX1voDuZb4O2x2%2BYjcACYdR8%2BzSruXMgd01X2GguuthrrnCTY6jEkmFqRFofJzedjQlo48YY3f3YjjOQZ7zkilBTvEc9yttAI%2FyL%2FRfxwYTh2AGAUpueL9NAvRDyLlrCyxOSAtb%2Bn1jCgLe31aEXjVMVQJpMxnr9uEgnvJjQVZs5%2B8TN%2FohsrzQPpuuWmsDwCRxU%2B2CAcz98FTkItqgaj84zE4stybLy%2BkuO%2B2av0K0lz4G9dkdUSlzl2fEZjwfD5yXhvvUugIUdr2rjD%2Fdzd1JhPhNwtsCgEgUNGwQBjBEwlafj7VNv4b%2Bdrk%2F7b5JO2mR3YeqheLsn0RptCvxkL%2BdrOQcvd5xjfz1J8FElruKYbhESwDH0r18G7CdPVnfphdK9TFxbvTF38I1sXBRHs8hy2jhxjzdJUWX0kh0UQgJM4B9IFLgGf9%2Bn0i9K07DSij4icTqc6AcY5y%2FhhOZeBmRjWALKjJR8lNGvhGt%2BMWkhQPZjyw27Eklu86XR21tDWrUnoYgDQyE%2FwkvQ19yUcex%2B0KfpdEnrYp%2B7qntCO9Lh%2F%2Fs%2BBumpmjwjFv%2Bv%2F4FCrsv5kn5VLF%2Bj3zF0cFNZxItZx6FBqcPGwouUBYjBrXbruKow8%2Fv0wwY6pgGkQkkX%2BUgKkCjlY3GcvaoGJSrjJRElNFR9%2BedQn%2BbsWGEO%2BTXZC8uoP0hZbwUZQqKuIT945lvetrqBJLc0I7PmJZN12BC2eMsyij0DeMjvEP9KZo0%2B2qlf3JWrCo%2FHyX1ro9Y4GZEQZlRyH8hfcOpFpBD%2FtKt4Q0wN6yNuEE%2BsH1LHpRd4j7BZc%2Bl5RwigNLHpZqATaQWMcwCxDyCDIVtQEqjwhRWB&X-Amz-Signature=428f1c2b0db9fc1e57cd44c3ff51112191c0c1f6db49ab6048c3fcfefdb54761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
