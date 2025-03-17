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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X4LUU2R%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJf7lFDvHq4uU33huPLGGKEeJM%2F3nxeD1UhCn771UCRgIhAOxyiuEv051%2B5454mluNh9%2B2qALyJ4hMRYr%2ByX9%2BC6xTKv8DCEMQABoMNjM3NDIzMTgzODA1IgwMfpYs1hkMLZOZHuYq3APNA5o54XLHKYyfD%2F7mLOGSIgU41KHiJVwu8mhVK7g3tiStDnTIzBnSyOTsH4TcRuqZ7TGp4fN18jnO4CgWVoVHRvf0TzF7Yym8tBRJaU5v24b5dh6eKLDUekNkrZSYVt%2FKiQoFqt3frNdKFhRQvLK5qD9yqVoYb5MQDO0tJs5QQuOl4t5%2Fuw0j3aqdPAPgy9yaw7zAEHPAFV6%2Ffjvg3cMvcFCVEbjXE4Bjh5Z2OSmqTKcfarKGEXFkYG7kKKJZto9qqOY6SM4vbjglwNotsm%2BUfrHUtMKu79s%2B7aqlbiDRM0tnByj1VKJjpr9yplbYEILBG3PiSDrmM8mAeVxOPxUKl0%2BIas00RnE1AVbCax6IpYoGKcQLSN0CIDJ1MyasAbNP6o4hkPAvWtSLd4bQnG0La5hm1pIMokFW2J7XW1cU61VJKl9JthAm0yf4rKrJj%2FlG7TDBm9EN9KevxPCD1F8LngGFlEAtR0OWHLWv%2B3MwU1mG5zCCcjsZyK8sE7sQfJtoC4DyqphzA4ldCzD3R%2FZSSRQ6pCbEwph6QwwyvBjV8ZkJ0sstfNUo72y9iI2eGUuihUhyRsRpNQ7YFnfcVaxRF1xIjgyEhmC8g39%2BKtrOenyZOHd7ZV%2Fx%2BmPLwjDE7d%2B%2BBjqkAfOc%2BgtEo4d7wG2MCZ%2FKYDAhXCHan1EkOUq4%2FePvEUWEmTLKziU%2Fm8GI%2BB%2BH70qxwUtjOnf6IBgJhEkyeDQSLmcrZVmNBb1q2GJfHRNtvFbPOItS6Nryh9jSExEW%2B3w%2BoWXxLUSdkiiXbmOad9vNw00Ql0OV%2BFSxT6jC%2B0tWHYFosBfbmWrDIJu1B6j7xHaSPakt60ecf67pClqsscxMiMfS7IqY&X-Amz-Signature=e9b89d054c6345d6dbf2be417221a68467bca7fb3326a7bcac4705cb0225d04c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
