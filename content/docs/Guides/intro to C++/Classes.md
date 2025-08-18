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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3REST2A%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDmNyqR8Z2ZOJ7Vabiy2THQj%2BRKw23gjUMuSw3xyBF57gIgchwiwM%2BTs%2B0XX7GgTmbwiX67DEZikVtcaoUXyJF2FWEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLp1Ij0bcDrrE0%2BxJSrcA6dWekOLyK37aUdrREt72zLuYjceaMeeaXOJNNf9pTCimxWX%2FyeIcW%2BPpVg1e5QqC8A7lrIwbvL5uD%2FhX%2BOBL7CX2ceE%2F2J7%2F66mVcEcwOemufq5VfBqkV7dh6jkE8wQzlZGUcM7i9cgNxJaH8IAI7zfdJFKUe6qvNZmj2PzoSGCsvnP4aLy7%2BpRgNfIv%2Ft7PXFFQlpYwhpacGg9hgxBiXHsq5xFCrVcUc7q2w55ITNmJvnk4mp9x2oTZIyXByr6iDoZ8H4GaObSBcTY8gRfmS%2BBY4V0if582zx3UTGNOshUGGqXb%2F1VCgM2CASwlrRgIQfx0iD6DUSb9RgCoine9FEPz3m4XINtcG9Q8p1%2Fj8%2FUZRYGyFZyELVueYJPQNKmC05EHWTfgaGw2RPAx726AErig6dylzIGip4YtjwxsHbgCa037mucLHXAmG0btSNpsVf15rToq9x%2Fc3kiUG0uI16OJawfibI5PXjAomHuBYrBb%2F8MBU4RvaZXmN9hVn%2B%2BftPkdx4xXAqDExzcud9JzbASKFrqAOZo2hWiVcmMF5j1iEHyZI654wLD6UiI0P19c5sF78SZHjHSFi6XxAkJrtV%2BTA7LcD7OT2QuayJB04%2BBLc8FIc8DHIlaPe%2FSMJrricUGOqUBr0oaL06iopB2SJrMjETxX07NdGaTHe3JMRwTYAWa1nafFBkaDw71YPYCx8coWdtKtIVjDw39tZ5sfR4Ay8Ik%2FU3eIbsidspy%2FbthGUnD6c0MdP%2FiIu3dl44rQOXpUIRvHow%2F9JkJpmo5YVRhseFsC4%2B1spmVSRGT2udKv5xBbO4h20IES2aha%2BYBBUAYolNUMH0xFaKYMp5Z88MgLUaa22xH8GwU&X-Amz-Signature=5a701794068de13a45419ed56ce15d268760697a4a606368dff7b3c0ddc46b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
