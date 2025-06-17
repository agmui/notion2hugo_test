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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLOTWRYZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTpIZnvU%2BAFUHDsQZ9H%2FGbUE0agGS29QspQQHp9ULMrgIhAILVX8q1MHaJMGU4K42aDwwWuPwXBhCfrZJfYxMZ0pufKv8DCH0QABoMNjM3NDIzMTgzODA1Igz8EiWFKF53Y4g4TFoq3AOgQ84nX%2FN1kqjlrk106lhDddl61luRJcKNhQcoZyqM0mZc33DSnrBzAaYBARnUJStmaOSq0dwFx0iE6G%2Fn9YZEIu9xDPhrH7Q%2FcIibxw0x%2BPj6jtjTArO4lhTUu%2Famkc0Uu0IgM0kt%2F2H5kX9CYthK3uHiDwvtckQFjKS5QOdJ0jqmFPH621dNe%2FC%2F6ImPA25RmWYva6YKTO90VdhCt3jZ4j5V13F%2FkduDgoqnXsk2ZR%2B%2Fz3gGAAZSTh3spLF%2F9i14SCe%2BjvZ%2Fk0IJeqmepVrSEL1vOQLkrCD7GcM4Fu8bYF2ZqU0YY6QZhTHyy%2Fmfp8HiN8d8l45xURb1DzbN9Qr6PUpVy0LSUHSCT%2BoXozmqOOFom0FHXMmA%2BAhHcRtKfnYBSocru45tVveztqlFD5%2BbYMP0jsMJhvovxmrhlefXnJbcDceE5v3VIt61Kpw3mRqV1rftv6CVjrn9CaWo5eURHboC6vdpspsRDAh%2BhAV6HKaFY5g%2Bjy%2FpkkJISuTdR6RdeAN55YeU368ssspLRDo1I4mo23zZiuhEP4kgw14fR0dmTjJu21MjW1SRS3KQMKV1iZerA%2FrKFYM6RB6JU334kIBK5wA9a1bpNGZHESGbPW%2BQaHkvPKzzvuGGXDCticfCBjqkAaneNawNGZOn0yiYfoQ7eF0ZCu%2B8lB8bXYdcDrtbAL2rQprI5UKOzKOC63IT8Ajk9e2zfUeHmDWqwBAGoa1NftV0P%2BhQABr3NwcdTgwPXoF2AG2oBD1HqB9n2zVnVkaFtDbC6rzDgS6ZEI%2FcACDs7Z2WqInCQrPVK%2B%2BDs0bLr3lskqx9mspK2i6JxpK145kTpgpODZg%2BwWxc%2BrdD33IsDjA3da2e&X-Amz-Signature=2024acabee52bdac56224c6c359625a33d5d235c97b4d1ca0e5353a30a8a7fb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
