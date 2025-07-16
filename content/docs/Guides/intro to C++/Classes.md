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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGTALHQ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIA3qOjQ2ucac70aJhNugp9WwEyeLE5QN%2FA%2FivnNcq6HdAiEAvsSr6i20MxWh3eBZcpjji4Ii9Ir3Jz%2FxAFlL0CCJ%2BkYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDKX0v1kp6jNbhtMNiSrcA77maR7ghi2CjbXry6jbzR9vXaiJdRzdMxL%2FKe9Cptp8ioIcgRLxm9gD67UdJ96ml8N0BaQVgg1Vlk%2FFZRd2EbXf9oFGAx8xcdlDJ3riCDyxzyrt3AfKBr5PsvzrwOIbpduLREyFXU87si84MlM0BR26AqYVrIIbCl85EqTYT2nkwPYvLSjwpjz6LP0Sgv7arFIbcUBIMM%2BSbA8Ag4lT5LHM5W6VutDtYBOP2K7VqX9Qs%2BN2%2BwHm4syuDgmJMuybJ92LzsstkKur6CeWKdWp6WEKO8KYaV4TGc4Cdv00JfTGjxyTbyMlf3BbLOHj36aQ3JlGy1hPkvwrugaeY6%2BoFWppIKbXkffbzlE7PLyPjtDB8I9o4WTDB4lID7o%2F4bI7fslJrXD4mlcVuEqeejyA0nayJQUTV4NmVVc2N%2BdLqrbtBIVrUcKhav6H85r4IqPxs%2FmzuAlvO8r1nZtrzYUwENHwik9rCSJy91TasA2C7ywpOmpJtoJJfYb3Ft8zIva2kOnqWO4%2BjoHJ1ZIJT8VxjLtGX82C8VpmpN97SGh8ftaI5lmWZl0Kk%2FhHuoJxbwDOWIcBSdHSxHixKN%2FKj3REDkAMmpx10JMnbc1hADufIYI20w34aiwcWb4I6dosMKa93cMGOqUBIXV9aqQ71IfwrWlUY3SRdyO%2F5xDGJ3nlMoDEKZlgn4XTfvZuQfii1Qp4AEQfKymlu3zoWVvaUR7ctZqK5Kz6%2Bj8D0lUyl1RXnmGsvhHcZNA80494pE8IVxJMyViJsl2XzfN%2F6CEUb0y%2FHu9VFno025rQTBmTBfYDZwKf4vZ660z4hwtXAIiSqALYMoZbpJlCz4x5EFX5VTPCaNYmF19eJ2OH10z%2B&X-Amz-Signature=7490e3ba38b4e1a742cc0c5fd05e532b4ff56afc1bdaaa41e5a4aebf7a4e3b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
