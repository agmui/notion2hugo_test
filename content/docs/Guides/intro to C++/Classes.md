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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT2CY2Z7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDKGPWaaigmb1gPC4G60lpwlPid7z7zfrJo7Ngvwq%2BKXAIhAKCrYCd8QkFbfutVLOwPDbxjYOAv%2FaTk80BOb9twzJipKv8DCFUQABoMNjM3NDIzMTgzODA1Igxkv6EJ3peRzutsfC8q3AOYZl4kkCyNbfYbuPYJqsHdZb3uu3ofmZHeTjrZWLNM%2BtowahHY76Rb7Z2947wwk0CYAi8%2B05qiPawGlUVSlgFWlEgntsawO5MM0mc%2BPjkfKpbGbErjlDB0KT9xFFJVQjqIRCf8he%2BMejDAX48kKDsP818ZwR86s4KFnXsYNQwIx5i5y0jYNrp8%2F922jJ0zmjjxIPqbtdicXlsWkU3ladVK4yvSxnbAukts68udSA%2FVmT%2FINlrsrRU3TzU%2BbLyqRBg1gb8vTsne%2Bl%2BO2HnqRuwc%2BkEpU1b0lC6Jmc4VpnU15GAp2fV7Jyve0U5E7Hktma9LTaeFIHh%2BlEV%2FSNdd60vcZYcbNSKMKlMjUMWX12IqA%2FzPTcRBVIzij9e%2BU4v5d4WyB2MtlA8R66Ix38AagnadnedlRPYllg66tesW0F4tPLmdu35XWVilCDBlGXy%2BHW4nfY88t4pIMXd6hMXF2CNKIM0pubsj4erYJ%2FoLyVuX%2BR%2Bodg2caW89pA0L%2FgZkHS9rti1Fz8G8H2tbBVRb%2F4Qkh9tdTF8aQvQve15PE1yeiFq5dOdUEYdPzkD1eLxhwfEXcMlccoP0nqAyA0fuWSAG3DvV46pehchs4nkRreRvS9g2IiXd33toSUN%2B7jC3ifPCBjqkAUk2CJ8u%2Fl4yEPoCNacRBFEZ7fQRMC5mPIGhjzb1Yr4weqaikvbNVofW848sn7RxZkc8NG6n2uFXJbHty143B8SOzROSsn%2FjFrYzgC39aUI9TzRAC6YbjdXGG2Vdn6yHFhEvFnvpP1qY19CK1QjxCyX3nA0Mo4JzNVLMJj46dSJxMhopknT71NDMb3%2Fqy3ExJc6mGI6frI6x4gaIAoaQ6F61%2BseS&X-Amz-Signature=981c4cf0ea2ae45e9d0341f450f23fc80503c8492c789f0dc5b977c562b10a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
