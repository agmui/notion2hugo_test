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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LW3T4ZR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhg%2Bsf82oiXTGT2aUmGF%2Bq4jLF39T%2BFbWCQ0%2BSsOFWMAiAMcgtkogp4m5Gyjpd2zc3YGdfzkKTMreOVgrzDYXZHHSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv%2BkGRp7SG%2BVE7dXCKtwDDUH0VCc4zMhUK5yNK4q7HnDwwCX8N%2BD59i9GJGV%2FSgojAdPRfKXSlh2naH2kUSUmHjhKvfnApGcNwyEXdKNfWhz9nsUXtwPf%2BnSjfk7I%2FItlCtiWBEo58V8ocTj38uTgfHD3cVFnX4viNbtlcbQpurzaSpnY45TcAJrug5qQim4bBeY4cBstTuW%2Fk11niNiGyaWYsjydGXV%2FfnZJf5Osxf%2F67XpqH3kxjmRn1X1eUVW53U7z4GnJ%2FNIahyj7%2B%2BTddkC%2FQxuc1c2blBo55oDPI4yCjmLjwADqhi7xxsB%2BJGo2efnvXoPFfTnoNDlTnELWRg%2F0u8yj9rS2WrK4fJx6drARWHtBSczv6wSYd5OUxqXlnr0AYGae9tb2s%2FxYjQxrg8jQa5iv4SepVqAqNaRV9K210xxsnNKgkv%2BFyf8EtiRYXS1eFYgBx66zGmbpkHvR83c5BT2EBZ6J1MkxnTG8a6WsHTFOjeh8klcvSH%2BCp6xYjC%2B6xEN%2Bg8aAa0qDl4cYqQY90Q4or9JBdDstLiC5oExTFGzCL12CVh7Z6fg%2Fft8EQtO5K1mCkQAfvwx5KW9tsSD5zGYtwhsafViWYrnOowz74TiAXP9SmTKFBctfu%2Bucl8FDCrxb8HbC8M0wqKaVwgY6pgHYuJLq1DPdaJ9cvwsafoa53C%2BggNtxDaHIZ%2FaY2YPQ8dMsqTVNBMutUoyPxw9%2FM5b0YK5F01F7dSsqtYO3EXHObxQnK6aHQCFX%2BPWZm3R8Qm%2B956X8YLj%2B1f8Z2FXM8OYYvBZLkQy3IymW7WGmo%2BF%2Fp7I4IP%2BG3hUo%2FFEYsS7pxskbqv2qsLVayrK3EowkyEiVKkq36n%2FXpfGf27whII8KVvQvVhkK&X-Amz-Signature=8a97422131f5e38bc2d106cd9c9ebf98b35c8436e7c8de4d76cc940c3885a64f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
