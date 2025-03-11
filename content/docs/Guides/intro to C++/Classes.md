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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4HMYCXB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDlwujyXJOlu5O8GVt46rvdjdnKqgH83zxGLWuns1cMKQIgMdNQs36lZSJGEU0sUQ8OtqV0PL17LBisXNqHtk85RxEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6G8j9c65uZUYZClSrcAzm0fhvLVfk1C576Vo5INHuUAgDzVOkYJFI64x1%2FIN182uc0M1ROQCaHzZ2xr57b8DX1mKXwI2f4psB1zyq%2F2LbWUH8U53ada%2BPtYHn1NqtxMUWlCtaG8U%2Bd99td2TCYrEFW7Mqd%2FBFWgT%2FBtYYVNdMIjyLE7UefUx3vSkENgSq3AaJhxz4sHGfo26krS1CtvyVfTcbH20lpG2T6KYK9dvxuna8lo91hYPLqjm7yLDjgfCkuC7LDbUK3ERV3rChSgLMGTpqS29nVmAwdB3HEotY65OinbVWhr3JnkPTLmRvJOhD5Kd9Rw%2Bo0VaSYS3RRX165G%2By%2BG4tb15cpIvJ8JPuhzclAuERqQ3q70zBhrYhfYEmM%2FlrpJE0eXy2Pth615CLX5WmMbTTqVrUHlLuUuzsSH3%2BMYEP1cMCdslDwnanVfJmQ4zwqWpmHBa91ADvcuGAmKnqP62KqhfQbGsoVpenTEiypOQw1qtB5AMCZolCm2dxSbvrM6ZmHJN0QiBBPOy0HP2Q9fOnx6roYMLbNJdhuv%2BkBrcbNipAQfJVITyFO5rRVCFgsyvN8cwwmIoD%2BKzODVKXRcaUtzx7Ed2WP58tGCakfPhcdcvbwFI6GUH3BlUt8c5MRckE%2F4MYcMM7vvr4GOqUBW8sv7QjqUktzGwYbeoE1%2Fdhco6nPBXIvrUPOSaAQAZ62n9leCLKazXrdznRwvY5SQc5AMS1DJRs038BD%2F7c%2BcvdEIzgL0rb3pNlHwbSYrn%2BTuCOTkrHLVPqAkHB26XF3c81BSamLKBxir4C%2B6rTGp3uyK%2FdtUGO2qnk7VzK%2F%2F5uCfd5Qi4mbkc5Dljz90gTDfPxNoxxQJZdhn2vQYWj6S7gW2CDl&X-Amz-Signature=94960c2fc17251a649f000b614d17d34bfe4453bffc44ceb5af3d6a27aec74cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
