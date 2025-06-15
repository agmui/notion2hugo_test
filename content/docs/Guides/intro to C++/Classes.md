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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMZRHSAK%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCoFj5fDmg5S2%2BN7UUOlI2cDR0mwrHVAZAvitQB12yMwAIhANeywSlYsuRoVibG%2B9iKb2Dx7j2JpQAQGZYbgoNJVTFUKv8DCD0QABoMNjM3NDIzMTgzODA1Igy1DRGmMRSThdr%2BGOgq3AOClrlhnwkNqHEENvTbKlxOVbVbDoHCqC%2FDO%2BQjt3lUBviNLS7VjHANvY28sZeAFRwqsk%2BYSWMpqjq8mX5QFSwup9ITq7bvzXFMvQQpzSYObx32mZhhpSnYtjTzAWKbB1yIuECkrNxP6JmSttVLPhfxrLQ97Eak6fp1NWosHE6W%2BI55J1pGL65HUzQ79UssJcBs7m1SUWk66QYcEVSvUrRAsPJ69tAalvzDZK4HfkxTFC1tVwmPN8gkJsJbVpK827XGsrnHwZutm1UnN7n06CK4zZnGPyPxc6DvPfjfxDbRD0z9QOJpFqCUBk8fZdNpyW0pghq79HPMuvBBLqHiEWo8ifCgz%2BHKblm0sWB%2B4vBMueIvZbM%2BHbI%2B5gdQSanPnwMpvA8VC9ijsXWG7TIZ4HuNnqdBQ3j9I9Ps%2B%2FyWSd4vjVT7uVoggOMgkPu19EE%2Ffch%2Bpobm23kKwG74WX3z41Y4I2%2F3JIsQtdAHyOUU4PcBP%2BAnyYSXdNgDdv58XFtiHbAo3Hspcn7ovty%2Fp2oi%2BQqVqBGipPR1hPLkp3EFyKXmkJixlEn2MlYabz4I%2Fi5VYUKE67T6xbTUVBpLKD30cdtB8yeGF7gc4gIotq39XbVsjasGGPqgfOmM1l3twzCg%2F7jCBjqkAdsKJnYS43LqGxlHKa%2FaCxi0t6CisGFVrz5JznOysdberCbQC7JrKy7GGu6wMDC%2BEITmDkfuxHbKnhBn1Mq%2FXhnz35VplcvJwO96Jkn5f3kr527rrXxVftyk7rMueV34RR4VwxZXt9k2GJ5Kr9TEKkTSQcqQnLmelfFC%2BV9oe%2BPeYE%2FY8zbraiOOX%2FbtLvKSSIY7Q5nnXShXgC1ggcOsrsnq8wQZ&X-Amz-Signature=4a4463470b1c4ed21ca95f7d25dc523312440955804f3131df2a0c1a7e7f86fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
