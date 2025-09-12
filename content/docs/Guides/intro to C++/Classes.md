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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YSYLZOG%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEX7%2Fice8aVEpX7RYIlYPa7hlts%2B6yF3sfLBXS21A9yzAiEA3o8PF6lbW1e9O4ChFv%2BBLb32sBGFtplHDgMS9w%2Fvx50q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDo7jslGadmioaSbpircAxDOFUaPjvCcYvDJCAnHDV91xHKyzzR89VD05ExwMJWK6XeFjkrP4F1707x%2B%2BI0cHqzZI6i5pr51lSqJVbPTmo3x6YZI6G2wditqtQxNrUh4g%2BEFlBWkJpOwo8w8cMLgt5J9NAstATHiNTnOK6SMbYwZXh3X6RDnUCxSD73OPQV6Z3o4aaRsDlsiom1ok8K7BH9CVHajYUkaGFRsM3vyBu34mrSehoxqB4S5YPABCdtQqBUs3eKzgQpd2IiEbMo%2FC7omKvqgnquCkNZggxW4RuP%2B8CGXzd5OvK36PYhU8Sv7usURipAUAWmz0ujJA8w7xFqF%2BLaAax5Vo2YQLFHJNExe5Kb9l5WYKa0mCDbCXv%2FADYPnGY4slAhawoQuK6wO0%2FQtMGL6s5sho%2Fp9I%2BwoMfb9ZjHVdW73mNZLRC6%2B7WRjuhCTXAZmVEhHlmKgC%2FEt5Tnt300CW36c1HrpNXyD03hzogzwksf3TKkQD5NlhODaTlUK63Hr9Oi4qyN01cElMFepHDi8Wyu0OJj2ROIFCfwxHKU8ygF6QlFIFQZ%2BDeuz%2BZ0wQ%2FQrMfVG1pWzxNAZOR9Ha4%2BEA0OatECZt0VRtf4lY%2FCqAgQLy8cOvc96%2Fn0KRvpFU1lTuC7MwS4hMKTRjcYGOqUB6tGDVvWiM5%2Bl70ylZgI2Sq59bm6cKeFQSDYlLMxYuGUrhEijavaOQ99DP8Jm8WWfRB0gZsEkJtN%2FYYJgEzRDUfG4VH5r05MQKqkrKfoDm4cTL9DZ2eqdAIz0XQzgN4mk4reEXBfItG58nkY12nT91Y0EQpFBbu2GH7kmY6aATNCSCTYjwxaeNhjqYMZ%2FRo4rxQxOsjqmUGHS8KUsB2MJG6ydIPgw&X-Amz-Signature=90af72cd728fb213e3b4ae8ff5cf270b12db0689a1d033626fdb073b9e172746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
