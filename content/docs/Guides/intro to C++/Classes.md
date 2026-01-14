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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675AG3ZGO%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIB41lkFW5XS%2FvyY2lk5U3xvoasUquwafn5kJZtIv99%2BAAiEAq07JWJEBcRY3zgAGX81KUjYkjtql3eA7jwymc89jgu4q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDKeSTGfJX%2FPIp42akircA8%2BXoxcbHBzF0hUCqcNsXBr6S2ZY9jfm6AweANDdxyMgwiXHl19uRBtg4F2SinV14KJq0PrF0tjG9fSfZJooWYyGfkPyw%2FWNaLEC4QNwY5xqGh82uMO7GhdvfzZJyqgEwvR0evY6UGQBNen3oT8amGbCZt2W0kyYiYCbYkbzhVV4a21wHDmU%2F6iuRyRxqonHkowSbmdoQJfl3iDalH6oov9dFRZQp%2Bc2q4nv8agO74ikAhYg9w0hmdc4Ee40xVVEy4EtaHsCGTPsAFDQhkPq0to9NJ52oKWNKN%2Bd6gMontE%2BXKciJgsqDsfOsnt0gyx1gnJwp8oA0OH1OFrVPIijdM7hSh1BjcRU%2BAApt0IJA3AXZWffQo1E2pMN7ZB7nhXLM0NJGG%2BtedAGOzSQ%2B7VqKYk5CXI5wQABqL%2Bp2LHvqWIb%2FRnPR9UVRvynl3bI8XDXFe80x1Ouh8yw0hxy4SgUjdZyvYuUHwLUNPrxr%2FEXZIrw651fx8ljSGbNoB6V3l4atR9qr8geJ3XLDeIn%2FKzaG9HwjS2e5Y9iiSXv4KSH7O00tc7ssr%2BRFCaVRfMVyVP0XdebhuUpj%2BHMmeO4yzZsfPGfG0foYG%2Bp17axsMvhVGnYnMNPnwsnJQrrnIzkMNLNm8sGOqUBkz1GsbJm8IOtXaNMYw%2F8UiDQGx4zF4OCodeWnrISnL0jRZtzUZdXOuNyvYTJVZNIh4cjl83Z40ODbt9r5I69YJrcPHi6Y81aBDapKztutQTT75tJ3FsNKll0KGNxqESu06oeNv0P0pE1PMyw85bWkLRi%2B0y2mBZBWK2Hixcjh5Ewpp2Wktazh2dBwEEnV1Bzz%2Fu5LHyAE8gJJS73xBG02yqSRQUi&X-Amz-Signature=fe5ee5a15cf4065e8dc55484ee8a63244db0a0e75e7eff68bd68f9978c143cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
