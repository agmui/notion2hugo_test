---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DRTCQ7T%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDGACtbGha%2F25aFo91%2Bi7N5KZjYON%2B2XKksb1UHFBlxfAIhAJg7LnBAwa%2BsqiyCcUMlWq3s5xu%2BTU%2F32e48a%2FU8xTcxKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxR4YkmOY6q%2BrdHaVAq3AMjbyBFcibMNdKlCEBWaPtFSOf1aE8PJY2ye4b38XH7oto3X5SAH8DjsIHCps0mv%2BZhh%2BTlweSnVQiSANoac896ia0HK9IgouCsPNhkPOnssYrtsb%2B1fcKvLXFk2u%2BcP9YWYor1L9RNpEZ8E29kgtyXFkEHUqpbxAfNf8ocOdMIEM2RMYaiUtjFa2iiTvhyiVEFCDnbVO%2B66n0eLbLtx2lHdkz9%2Bzbi%2BQYQ%2FNU1mOAOIkADHb9NYM9hPKKxOOaMaiNTCFu%2Fr%2FYNE2NnhV4cYOANb5i0HhQSl6BUs7pNBj0zZiy8mU%2FQGwjNvZnrBSLtfK5oeWWn6DE9hWQJsjH3F9dlgdEhdbcwUb%2BAbjMRPKwTwfML2FonWXr8LabO%2Bs4KNP0W370Upl5%2BJVHDFOoRAwQu617Vm236HOlYJp4PudvjFhNMLhi6NAeAAGAHAUf8ehUANctpLefKwCoF61NFZfTA5kCZOnmmnX%2FbBfEC1MPRjv%2BLWT27rmBk3iUD7mWSFEmL%2FHuC%2FwjlaBAxeOto4%2FXZN%2FX3pkbj6V2j8FWVJI6qPlKI5qK5FZ8qlUinSAthwkxQNrCs99D0Q6XkKDGkCaUmburW9I054EnY5hH0oVaalBbNVO%2BeT7B8A9V9MzDRhIDBBjqkAWNGh4F33ibTbIBzP3x1yavFY90xd5GK%2FMzfkb1ehqurFww8MhuYAt07g49JINFsYmi8clmovA4OrxqY9PU6IOciZbZyJnQszVAJe8%2F1Dg4aZqiEl5kliaNbT5NOgCQ95iPJVFEgz9T17SUF4ksedz6zCi%2FJpxfZS4NVc6RqhRXmWe5fPNOlBWBd6%2FLAoq%2F9iiHxayO2Ykca2wYRoJm0oQ8Zy5Hi&X-Amz-Signature=e60ec16994e2baa46481cc430bbb90ccd280127be87316f5c4829ce475c92297&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
