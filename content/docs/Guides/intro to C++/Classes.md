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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WP2Q4F3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC5O1lB8uDgvJkAqmD6YhRW3AW9fudSpWQda1%2B0ASM6XgIgE0rnyViQjtqul45ITBoP5r0kWnc%2BCo%2FKOlCin%2FYyYcQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDFXRBD8M%2FeF6GdelZCrcAwU2R8OTrZvTkonTf5oKLMtqcx8zK%2BtYmU3vz8OSPn0Xe%2F9ESS5Kti6SveJ%2BqhxuDno8Fg77HD3WWpZ%2BpK8tXwHwqr132cIT%2B1eGTeLfNLWalKMUjIJe7giOr9E8Wps%2Bs5cXzY1JzicwDiUq8vQrbNegOTxMM%2FMDQ8VWukATC0Cdoylcs5PKImctEfg0ImeJ0JAfHQwukxXlc44pKji8D4wIqDOrP7UNZ2QnZmzbMFMnbhTSvfUaA56%2BGDhyNFTBEjrfRe8hm7aCVUwk224chAFssSz6s98PTkMhEmJrdwwphoisfPqjJNgNFZJ51wzCs3trw9%2BQoenizCZekNHN4IH%2B7mLnBZcB7vnkh5%2BVYuV1gboGYA%2BRwRP0t1C5n%2ByDYO10sSEpD%2Bjw5SJ70Ig85U9YlBFe0FXuS574AX5P0olQVO4zs2aG27BpAqTcMWvpLOf7K0BREtgQwqT9Cd7LLl9fccJ%2BMFHy8ampzlrbk6WK9WtVgUjSApPC3uHixfHxIHloDz%2BPAb8GCG7iUCrIxGWVQDumaR8o1FOosa01Ks6TQA5gEj1ueSOmUiklkmVFqWVSzErl0BrznSgeQ4uq4RzrH1losCPbyKob5WTkh2V1Nxt1TLtpdQuflZ1OMIGSp8MGOqUBdrCNN%2FbyVQq6mzXFjb6H26a%2F1O9vu9Icu7u1M6PjoHg4V0mDvBSvPiSUz5fjLZSbXMlNbxynb4YksMWSEYQVQL7j%2BBzvlhBR9z7goLHLKjIQnCySFiNTZU5RZNSFK463Aq2xr7aYVWMatOfflQCoAvjIhGkQgvJMJKcJiPKmO%2FmSBgOR07k%2FRxp4zbfjQ7UBZ3MUdeWMiBCm3XUuyfBmAcWGo3XJ&X-Amz-Signature=829d2c1186453e54c3f38ae333a96b0ce9384493e55085f423416ceb289f4e6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
