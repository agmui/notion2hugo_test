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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB7C7TCY%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjJu%2BKwZEhCDanPcarvaPFiYRAjoMr%2B1Z7TqI%2F4aIRpAiEA1K8IDVkXepaTMJ95D7V5Yps8vfznWk%2Bm7t8b3%2FILMFkq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCWTwwqeBUml3nhtcCrcA7IgvJ%2BfDISLnqNpua1YDTp7pUmZzP46YQ3adC9igQXVaPDxmAShhFBEhtoJAKxdjvVYB6Xcq5SCsx%2FRqBnSU0w9yoeiXEyBEZL7KDlg5LZFCuHZjBgZDA3WFAiADOBcQpl7jleGOqNL4bk0v7WIzIHVaHt8Qs0HpJPqbDkVKbq5ecWJ2WG4fouS7Pu1qeI6PuzTuKIF9qy3aatMBEku8Fx6Dw5fr4PbbfCRY6OjoPWjEPdDGs60rzrbpAPWWzgLUtUlc1S9aDTkqu5yGsncfghSe2n5%2B7cNgBiPSRGF8lEVWG1EN9mlBLa%2BJJTwTBRVIRMlcl1eLZBIO21zpXRVpBvAXjZrXVZedafJavCgvxcxSNufMKWr4PnlDp520%2BojVjTlAV9JBZegbHUgdDOK3%2BW%2FN6GDahX8GO6jlgL7Dixq1alIcpsJK%2FeaVpgRhek1eFkmbmxNPQzrOkNOe6ZiYiTs4Or7%2FfSpsUmolHeXekooiq7JwTteo2U8UGtcAyLIe6EKEW1iX7nGtiOOQ1U6eDQ1idmSpG52gxcKbqTJmdoiUTTpOph4U7aU6IHkKo8jU%2B3Y8VpN9hZ94BbYFvdx2AUQDvGPp0s3CslT%2FDX%2FiZA7cj7p%2Ba4tcBBE%2BV%2BzMOaNscAGOqUBRmmymcApXzaWkeH7wvWpCQmjC2IM4u2YqDdOdSj9PGX5hkyMxl2YsIIDbK0kSbQoGGbTVGtj8Z2Kg79RAMj%2BDD6u%2Bi%2BYwP7YDGEtTnMQ9b1ySnqmXCZglpd9X3zLaq21Kj2gZLE4RSOp5NxnRR6NxlVACkbkpUKOk30h0AJCHaX%2BarPZn2g9opt%2BhV0S8vDETPLiqsc%2FW%2B3rbwnEcFX%2B8XSI6DUA&X-Amz-Signature=8b7c235800d37c862bfaba060a0542c0c2baa32afe865bec14461cc7282fd8cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
