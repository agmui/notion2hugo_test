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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY3H3JAJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLb604EmnHSZ7PfIPqW9GVgoCoZzEv88C%2Bj5QtW2ysiAiEA9%2B9GC8DiBHgnvKPVpwrjnsw32G9kfKf%2B4QDLTTQGgdgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYMJLB0Gpg3A5ShjircAwel8F9fYTrgbQIZ256iPJ%2BFZPA2hN3mCDT48e%2BsDUVw4kyukoS%2BA%2FTN5x4DYyA%2BhSNjVeeVWcOl4GlouA8I69cBOvi6sNbc%2B1QJ%2FsARCTFQExbUYT7K0Pc4HD6wZRQQKhbvupuqlkl3EOo8p7FqqCXcwls6GIh8Tnh1puQkpaEduwvV41ofxkiqVrE3rYpGbide6%2FaBDGdmAgMzP23WVazAnI30f3pmdV8ofyCsIjoffy4uJDadVbOKHboQjeTh4xDEhzJb%2B4r%2Bb0IOcAmiudMEzR%2FnoSUJ%2B%2BH29kcvLtQJKpfwjGKiDvQcqX4Sfjx4hyzSqXB8IuJNj%2FM6sdf6W25d9HJWIlw2ApofhzRJDmB804hmJw2NSzLUMm6sFszG8DDoA7S%2F%2BPt5xbPkvHbFAkZDcgBxDRqZM9m0SB5GuH4Pmu2%2F4w7zXnTRihOtGfiEjPARlCiyj5%2BTa8KV1OTTSp1JPJMb4C0%2BKJxJVTrIibMXxPr7rSH%2FSAhkqxwYJjMJZI7My6yuvs7MEskEiD12iymIG3ZDTJC0B6kvBAXK6ujAK0NyYS3ShNjMo%2BSTCvPG09y3bomr%2Fo2Uo5OXi3ELOGKkjXxKOolyS1Fcnb0OWsS6eIwQs1ndEzsSAbMIMJ%2Bi%2FMAGOqUBEGnr1iU%2F0PYQn1PbXBqOPI5UOq8sjxyrqcUkecmx0kGQnTy%2F20XGVkNXfCjaM2XF2E8DQ081GIh0oEKaoJ%2B%2F%2B2ddc3nYPQ4YaCEXADMgF2%2FFbJYOJOAdDxXmCdsxE8kgtLUQZTvPpgCsRMABimLf5j3FZUrYLL9qmGwhdJc%2BicC%2FcC3SR0vMHKPAN19bvQZAFqPFjXx0qvcbH%2BNxW%2FV9gwPS%2BbNj&X-Amz-Signature=46127466c17ff875a3f32cf81150b00001e44c84116c02a65a046072a16527bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
