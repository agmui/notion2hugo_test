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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626JNSIZ4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC60WlF7v4h7%2BtgZ%2B9QBsWHpH60XmlIq6QNob%2F%2Bhnh%2BrgIhAOxQbhL34LBXdIlj7cgadip83OcU8haDMmba%2FTsPnlGpKv8DCGMQABoMNjM3NDIzMTgzODA1IgyAQ3oigjktOAm%2FNN8q3AOgNDR3EFTT8ssgtp17AjnPZGVNkxtqQ91bJ3mGdWXLPrqqVd1VNrZkpcpneRTvIye1ZTvuKjHpc4KWVsa%2BEma6gWATv5ZmGPHMcQKMb72WI9x3xsDsHOLa2DURclDVOKTg0GbZBQNGBYUaFS7BiLJx%2FcNk9UnW%2BnoDL5BByL5YsJgMO1ezhZ20yJdGmpwP1tM%2BVZ3Fq%2FB%2FLKSiZ6Y7F%2B%2ByrEJjrV%2Flx6iESt9w6%2Fz3WXuABG7CHtekIUCmMX49N%2FWPYdinKFu2KNGSfc5M%2FwWhZa47GR3bH5dRohMz%2FwRLojHXYi3%2Fm0ClHDYre1hDmN1iktFtKTTzRJPBGUED9KagUgz9N3V0Bu4sGFVwJfU3UrqFNO%2Fe3f2iYyOqiGsVQ7fDg2wFker635jTqXFCJnmDXCApH3TcFJo2k%2F%2FbcnTA4gMNzxhNpef1i%2BXGYqetqtrqz4UtreWvYS3NXd2ejUjAnCwvBcXpEzTEtlgCa0aBSCjmvDNm6KklUSG%2B67YAaae3d3Pgh6cvuqKnY6A%2BsUeRS%2BRoCTXaKGL%2FisBvMalo2pMN5v76BXJ1AxRFgxjn6%2FjVmfSNBEuOoDHqir6hj1TLY0bGDfXZsGV3okm9PxjzaATR9tPvCWo0hK9QdTDXo9C%2FBjqkAckxQvfIX%2BqgeFESkDv9sLwv9SgAx67EU%2Bf7m9vsXBr8I%2FS1Os0jxkpCjMb9lLj9lKz5g%2FmflxfvmpYGsZlwn5CcRz%2BuDoc32nIyX%2FgzMGLGWzxHyJQBY87ytqbkHZaOg3rHWJ0vbRIv1jCzTLNFP95R7hH1s2U%2Biqbmw06YTcXS4LrOabXyJRM6UZQvFawgXDK0L8Dir59GCIX6P8B%2B%2BMW4OngI&X-Amz-Signature=3f9dd0c31a7330fe373f44153914872c68df0fa3f0c217c9baa0e72fa49bb581&X-Amz-SignedHeaders=host&x-id=GetObject)

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
