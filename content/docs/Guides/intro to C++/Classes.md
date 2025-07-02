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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NOAHXIL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWEaS%2ByufZJZ%2BvNpGg0OKOXpLEph8R9eJbcxvI6LqTdwIhAIELMVkR93xLurbhPwonkiHZYPKWzLMY8uC%2FV7py638yKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwGpG7lsd99f7iV0gq3AONGG2AhjJO%2F11u%2Fn2TGGhvaZr9rp94l9V2T%2FgOrM3QmA0DqG1DloKKq0L6uRjAUb5ew4696TyVlBGf60st4eEYiWVwjmA4FqvLev7NFVOaZQUMYFVIe2pFuLdWViGeUccPhh8ayAwsBUjvSuOUdtjlcsFVG4eQFER51IcRUcglYhi40DoLSAQbXgrk0SuA8x3FyfPlVVHHtjH3FeCmHmIeBXv2wbJsFeY7et0Zp40p0szSIR8q0ckifczxFcdkJ5nlUbLXXbVJXEZL%2FXt8djD9MPGUEsdrpuBB9LcDBeqQG6cLm4depUlti1issVoSqW3HGioatmHQoLC1%2FG6DD4GQZcbd0te19zG0Ddn7qK78HMSFIz6o01mJyvrrGCK9X3PQRyFJNDVRSv5btVZ8geuet2mESJor9NkaXSanV0Ax3kR3frMw2kB4JYXVSNXbEuP88eBVhdi20xB7gmmE4EQ6baPmUgTiRTahOSX2JbIa2aCHzU5Rzx8aAL9GJTUriz51uCjULY8c8S5kyq4VhlEN9bZTc29JCnJTd5jNkn82asqhmVknXTB04wD0bRdWoUcpOsYTJ8jq5PQgmBl6aaU6i6HoyI5NZXHDfIwWvNIAsbi7MlJgTNTM7soHmTDXvJbDBjqkAddN4vB6Dvtw71rVNNwG%2Fl00mBb9VQ0Rlsn4rfBizriebSyPjhOCvCsRej5IBe57GS90J3UjCqLf3SH5ApZ1ckbSTavnHdL%2FWK9AdOFoLCpgxGPK0FcDmqfQE9ekOUPOpscRHy9tHsND1zOe5knqhezzYbEJdOnTIGR%2BdHfeiLArC8jd%2BN0Y9TheRoBitac6BowOWLg5pIriEC0FMQCRgeHYZBsi&X-Amz-Signature=b515ca4eff548c2e88a775b1393591871e4b10735822bb24ba5654e502909a94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
