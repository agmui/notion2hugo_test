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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633MFJKB4%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDSYKfUpIRRvMBVKuw2KNaF3BvutNfHb3IQZlt4eIz8fAiAEI385Fd4RUdP5ubmuc4Cux3SddAzPnCYmoXvxm538XyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmn68nfTjsmgDKps9KtwDWbP7xs4o%2F6F62TtZ4unDvyqfFQBDjjF48oNXGxu7nrORKjImQSYnrf6C79JBaoFmmIX%2BvA%2BvVydvB%2FjrWUODZsBREyyOH9ALWzE9hY%2BSw1VH0w7EAatPJ8w%2BmSVUuAqkkjKP%2B1GxnhdZlfTWcm8Zl%2Bk25x%2B%2BUri7ccdrFji5bSLure3x6LF%2FiF2OQbcggQWGBesCbA64G%2FRYGOmRYJ5U6RCbV5gU%2FR%2Fz02ae6pFTmdtaqXZ0Lw0UytdeyNI262OQGBjN1DHadCjBh5FDvx4GaQuhei4kQyPlFAAm0V5saXU%2FkzUI6xr6XIaCSdSNrlok6IAoprmipcuJD1ZCaEMI5xw9mHktEZytdxGsbslDfKPkqedxOy5BBmEPRnMKJLSx3dPrfiJnk6WTfvo1wATyq%2FQJDC9nftwmZIX%2BwCICZk%2B0N%2BU0L2XyEREWri%2BSXZ9qPlWoSbzBFYTzjcK3oLQweYEbfFVF3oIxkqOR3OqmuBsPaax6h8kVMGPu0A%2FSlf4%2FaBBxZdaW07n%2F3SjuSIyavc7MDRVKbTT2Gb1mvYCn9cWcOqi9ox6A%2BC8c3glY6KjQ5JvF1b3BXX2WQNBowsfgf84bYxsvsa%2FXXgyA0uYv6q4BKAnfCIvNChUPvs0w6%2B62wQY6pgG6rXLRvqZvH7nfsMmIbBzKAfkw62WLW15l6TLBO9W3dx6RBNFmQ8yZPI%2B%2BqWA%2FUvatyD3yo8sE1PN7tXiGkwut1UPi1KvNdIxA0kxYuK%2B1%2FQOWQcxPAi5B3j8zPvc2tla3XNySOoBgJ5JeZ6YlX%2B3R6gePyY7rG9oRIrWok4UeGU5kjwHjdC0iLC1zf%2BFlUQ05dFqE0xekS0oRxiQ87lxQCSXhUHSG&X-Amz-Signature=e98f9ddcdad5e62e8e77c43a6f34e4b085ac062b6216419f1fde8cbfa3f09ae9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
