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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6TLCARU%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2kBn6BOaf1RJ2P1JgTn3izzyN5nau98O%2F4PeltydnfQIhALqNicp%2B4e6jsIuy8HMewRTTg0aSIpZnIQUll7rokz%2FHKv8DCFQQABoMNjM3NDIzMTgzODA1IgzVVGivUwzrGHOw92Aq3AOEQd1fbT1KIfzwfrGQY0aw63WIL5N2Zc1%2BuNyaep%2BkOakXT6y96ymeh0yJwK75Dk8DedWYVoXkxSf9ymquhIguqs%2B%2B5%2Fnp7yRjDs%2FajqT73oqgb5tiHP0Xxunkw6Yr6RW%2FuTWUKSdQx9Uq4gjpOmOKWNe2o7ns%2Fjenld57FWmcg9ia2Xo4dgEjB82k6%2B12sr4mseDPtK9B%2F%2F9mKpWz%2BN9i3xVWuy5EGZJrs4D7FXrHyem5aZoaUWA4ZKMi250uTWLDEVSL8UVGTFmdUVc9y2aE5VdJDu4coF9Hc8dz%2FOEjYpoeQFgI74J54v4gARVpjLnn7AssGLkQKEWSEQA0wNXoWvjBJW6wecbDz3wInIWBwOGB2rNeQeyZLl%2F%2B4Bjmq5sBlBunw%2BobNfi3BVhbqK7%2FDzlPq87weRSGrStHo%2BiyYej0OnjWVvYd4mww3oxdfr7LsboLf5tDTsfEleVJTRJjLwtYxBd93e36Hhdj6R6SCVcQewlR31kbWLlYe8qElFpFlGhGQM9J2Mi6pTQMWwltQvtVlC1bnBz4vq4hG9CyzZwf9%2ByoM7dTAFEzz60VtP%2FPZA8%2FQcAlXdFWkIlpyoz9Hlx3kmGKRAhYMbF6QVHk2SjerYH9z2MgUoxATDDpkevABjqkASjJeuBd5eDl1RJruj2jTztfYwoSJSpMUdCTxwNMq90SM94YC6IqPwkTbSVb2iCMBcXWV5nRYn0Y0dAXG2ZaW9akluT8jdUJyk72dBVMv8BLvS3SjRUICcC3BHz1dGmZF6UAqHS6Lu%2FDlDIJwmmte0Lg7tlFiKsHvpgeD8MtBitUHTghfewIvz6Wh%2BmHMp8KA0R9UM%2Bgey1nRNZBWdIvTXVulUhs&X-Amz-Signature=7917a72b68ef451644885667e9efebc4f9cc00f2b9468a239fd0e8ed94a35cad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
