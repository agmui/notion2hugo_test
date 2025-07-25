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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UICQMJGF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICa7nwUayNj98lqp4PAQvinT6s7IJcZCKKEayCTi%2BR0nAiEA4idsieABTcADTqANqUZuVJ7YFEHBUG5Z%2B07Ziq7vN4Yq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDO9eqmaeTeJafs8x7yrcA0V27utYKH38D88ni0gTVarowaRZ19ePJpYYjF85JnNZpXnsCE3RTaL17zxjZ9TcldZdgWM2F02cu0BCRTwECkayZ7XrFP%2FusXZYHlTI0JR%2BQ0n1O11mSCxAZYiiVFfp4kBdYG9Ahk%2FulLTa93ect3VN8gAvSmbR5t682y9p644ph8NQeChVyvTuT4pyZapX0NY0JhooH3LL3n9G3aYq9FGcsS04%2BCAcxjfNl5rADMRb9m6felfiurl7FYxFyri4x6z%2B8AuA1%2BI1l0jgOzulMS6bB1F%2BE2FHckzTkTj1cebDz8pAgrPRAHOuWcSq96XTW0SGX%2BHed3N1SycMSknWWRki9jOuCZQKKrDUq5mbS%2BhudCwKNynd28y9a%2BtlTKq61bTYQJj5swk%2FnR%2BbgFlpNFruyj3eUQizwgCBovjC9vemRSgN0rH2GHF10LI4lOeZtiaOwWQ%2BW2K26nqzbfY4U0gznNgAWMm20tYQvRtX7COaB3p9W01F7xliLjHMuZkVjUQ4ypG9L%2FnjU3prNq%2BpT4YtprXCEUbVfcaFizfFvwcs799oLdooNyQSG%2FlnLMP9xFOhvXqUJAfIz1kGV2Onhv31jqEZGix1IoVwMZNsujxTEdioWbGwD30%2BxnlvMN33i8QGOqUBWzCNf2bFnnf1qvsRVzvLrKZiPvoITiCkhrhwKdzh%2FpzF1LjWnwhZ9kEjiqNaPmHVPs7EOr%2BoefPu7wrUbfhedfsuY9nyEEB8XL2eeN2aa7bQB5JG3UHRJbchERJmsLoYiysBVX%2BUjZONhoNfcAmvsT%2B7FPlv83XtPedd2oVmo8gBO2maGbxJcNWoh9NaldUgzp%2FBamwNzVMEmJNSKrU4zpTZf3PJ&X-Amz-Signature=4ae095b4d42d8c55d5a01968b66aaa8c98b857d685df3247723f396407e0bf61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
