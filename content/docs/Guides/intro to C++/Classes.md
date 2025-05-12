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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBKYMTK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCKCXxeC5%2BlScXs%2BphAh%2Fa1Q%2FRKHjrxF0F3q2mlTncangIhAOhs%2BM0Gxi%2FBGq2Ecny9d%2Bh43e9tgxWOnoDxBG8iOhdJKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQ8yrXUwT679bjN0Eq3AOs2Pho2GeHHlh3LTQ0rVFmMIv4ZvVmeNV0%2BDjc%2BVu8zP6%2Bd9oj4xxqYSqWcuPtK1skuMCAdNQoNphbNQug%2BC49Z%2F%2Ft57iryZ6GB92enK1y1hUd7TNbJFB2oLp%2FLi8g%2FQ8yYXN5yftrCrMGbtVkEUxmbGq48QAFSe9yorBUUAulbcNF7PhIBGkXVEag7flQDiypQLHdl5sQQI4OGgndSaGQQFNhyT2lg2ihOl6mbRIYifNXGPBGuVc6CEvzg4cIKdj7vv0f7nBBtSP8djPwu2aMNWMqWHMjbXpQc9NNkew1GbSAnQo6KxCZ2jVm4FenIVQ3%2Fii9OT92L%2BdL%2FhNocccz8O9CLJuSLajiYCtSF6Frfr4FGrI20wlN7lJAI%2FTNNK21ZK9zyTqSXKlHF5OJEW2t7MpW02NfW8I8WXEIyLjGKx7mvB7b83R%2FL4lht4blAxlicBS6Gt9xNIy7MHQlyVg0V9WcdaNhknDw5dA669pjjITtsOgYnyC%2FsOObg5%2BlTb5gn7UD576DRBr6oyqT6LoUS6zUvhAEP5wumd7WUtBpMoWS5BJDlMloYlBoJp9hU8MHbD3nzv7CD5THNGr7zRhIZurHQXVmLFuWc9amVcsClsSPfSpG985n4JeyLjCnw4nBBjqkAXW2lEZJJDwtmXcfmMytEWbvPx8lsBawUh%2BVDCzyVDRa2JTF6Kf7wg%2FrP3x1OCGTENy0swFV%2BfQPUOSIi05WjtrMI6EnqPcMgRthPyWOsIhajnEnxGVVBAyVK1YFeynxrcBV5DpjueRES2Dj8LC2Zh3uKu4ewcfbVeE4w8gvLwqCV%2Fv9jKmsIZepGPzERD2XPnQBzQHbfJ3qawZ4MXHqOTzVwDwE&X-Amz-Signature=57f79a78afe57a45d1dc5a61a0223e30e41c6b1ee5eaccc7516f86f259892a7c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
