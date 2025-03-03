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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466624BRGFW%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6slkkogAtT2gV5AcrRdMn925L2sTINhmS3jOlUTKShwIhAO6eV0bL42S%2F9pdIJMs4QLnEHEFL5%2BKA6CLMx%2BjREswUKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXX7FywGgzsWgobYcq3AMDJR7%2B90T%2BMrhAg5JeOlqpSpk%2FqqiaeGv4EtNn4g1PD%2FiZ2hT0nC4vL%2BMvMegqcSeruz315RIAf2oYOgjzpsik9kNGSNNB4g%2BZxGpUxJZYY4ULVPLacJ1KSrLPUyEswmF3OnH2tDEE9tNasMvgx%2BDT%2BCO9uaCf%2BKAcERsFPHGdPljUfyXazJmExmVPST62cR4YVW2zCQGvZEmNiPJaxEFbISpXmMtGSzSiEoIY6pUcp6vf5TMcrCqSYmuUYqi1%2Fn6ZUd2VAkmvBJrLQAekSKZbuFwszG%2BfuGdqwwHhRv%2BGU2ADbemtijltLcljuNPe6XSArEynq4g%2FW36mMujATGBDbYVYoJTasOeafKBj%2BdHkou%2F2MnI9OAJo0Z%2Bcrc0fB1n7WLDRkGhPHlWUeOqHwduGKKWrca7KCEiw7slcYVv69iJWEDd2YipYX46s1Ff2wOPW3J6BGVyqASMRkPtuUaTMzVWxSgpkTZeOad1HyBqhW91%2Ba9v28of3Xdoj1mNmVb0FiYX7SfVkmeYPyk5oLJadto%2FtrQyTbeWDR6FXNWGSNTYsmFZLc6CWwTu%2FgLMXKFv8Xbf3jP6cUCBA6LMFln12cIg4mOTbLMc%2BJuuD04XRLXwOEWgDR9J01MiT5TCJl5W%2BBjqkASNpAPakEEDvBE6N1ko4i2gv9wAbdN3VQ%2FTbEWub5%2Br0kIbFLfEVTnFgZmOeuzqT6xATkQ2KVZjzhhFAQCAgqQV2oY4NWbSVq4ASWYYTeNlUtOF975uLOyK%2FEsEpAghT7s2XjaxjT7s6SChjb8%2F8oLyVa5ZOnGjGb2tPXBTijRv9fAuMsCms0NIVdx4QgFDmHEdYuijeMknM%2BoM2cFaw%2BKvm5xQy&X-Amz-Signature=a3079892357751a228dd4c952c36f823e49276094ca2732ff323e6ebc8f58c97&X-Amz-SignedHeaders=host&x-id=GetObject)

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
