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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SKWNFEJ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7vLv67FPB6svcNDKBXYMHWdIxmDehR5oGHn8nLtJh%2FQIhANKALxuraQv1u7YvvjDOetR3cOA0%2Fsiv%2FgPAih5l65hAKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgheTwO%2BKE2rodvbQq3ANzGVnryB1KxBOKTD815OClzovRceVvNhrSsWD1H0txVzW6hyXsLvnx9HFIn7x9hP5YIgwLqaz2a1aNwakFIllQxeQ4W7cmYJZiqhdLe5crn5XLzoj%2BHqRiaIOmd5kX2gwaTwwCWSQKHXIXQn3kRFjYiv1d6zi7ioPp6quFpycmHRjM3BHwPpO9JbGydC1A4o4%2Bb31n7wpURWXsjbZ1DiFkK83%2BN2ohH4QlkedMBpZTzkZWlx%2FtZWDCZkUru1fa9kVkkD9q4D9ZWCMEexStI8PqcUCC76lh7QndvzuCGVLxo7tY4ulcnxyef6OdLuFDj2ON9cS%2F3n22xfHDuG%2BotKomPwjEXm8VDvjhjTfPm0dg2yIWbTXoO8Z%2FsA%2F5%2BN3dAWGZ3GWU%2BAiTwyh7vxlsg%2FHMaRI%2B9PwEdB2VaB%2BZ05v0OXfHDfrwrhoPCcJPALLC1umkY90qd3ZkYpipecrxRCGWiDwPTZHfACNPnLrVJrafTM4kPKQztupuvA5BL%2BmeRWHtXm7rOLc6HOdNW5lcu1zZiKe6ms0JlPkHFjq0W2OvPSfUe4L8pp8%2BgtNs0lk4MKULFeI%2Bu%2FLKAaOMCufyLZvTCXogc%2FNTfdC5cURKbWkfl2m6r8FjvEHyj%2FESSjDP7ti9BjqkAfCYmMvTi0MGh3DC%2B7GC%2Fe%2F%2BJ1ND3%2BUVjhq2yuJNmGI9rVh1SeNJ6aXvSsYbDQKWifFuY3%2FdIEO8EVcOJ7xL9H%2FlhRliYeVc2WspbpQ%2Fyw9vKSVkw9p4rdgWuXP57ond5gEUadQIJ3pkTE%2BCpWN3jSjqOx%2BMBQ8Ttgjb64vHkdHBWlzSQPP%2B7bw0zl383S3vrZyp5oHixlQmJwe2rMKdOwf2rK0k&X-Amz-Signature=5d7655a5db61803b47044c1f83278a9a97ee519281226de79d41be5ddde6f549&X-Amz-SignedHeaders=host&x-id=GetObject)

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
