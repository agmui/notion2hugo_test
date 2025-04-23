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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K4SRESE%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T003955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCL9OJ4aM0G%2FKUnkfVpeB7uObdH5zAb5%2BgqedZj2soxTgIhAILUsVsk92O8fEJsMp9PTnGa99qL2Q1%2Ft0kOhWyLRy07KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyM2Alx1bORUr9teNoq3ANfNqca9bV89gFhLPTt0Nkx78lr1FDfNcXLw5uToSA%2B0S%2F4%2BhV2bRycpNF05wHV4Q4YMBsTGh6HRGGLiCY1sNtWQcBZx0h4un1hLWahX3H4HcSVi5mTQsopVqdeO8N%2BvJdVAGcc7e%2Bt1eIxiMJyy5wvzOWNd7yCNUWYkquVp6LMpL753m3%2ByH0HEeqj068%2BagFhhvGBTbNdTd3x3Noz9noua%2F1Je8HZuMxagH%2Fbd4prj5Y8wjLObironiYyvGg4KzDBTzJc1kzfikq8aURDhXJpiqH4fXNF%2BDNAgJ%2B4y%2FpQYLjRs7rpBMuGXLNf1N%2BLKouy8vO7oJpiVzOumdJc15EQ79jyEu1Mw3bNiAUUPXE9xBqE8%2Fbxg94LBG%2B10Pu2vY0y7yiONJQrWCKR9sUdiKhPAijP1zFFVwriQgAv6qnJoDzqw5l3NHiqqsCEpSW2V034M7FRyFfnrTEUbgjDOOvNxw9GFbzPjdzha%2FpJoXAM7ZdRZejgIfcvOP1Y%2BS232iR%2BBxYWg%2B%2Bm3TCLmnndKai3HISCN1z22VcacuIijtTd9o1HUcN4JmZ0QungvQ%2F3IoiYWTa5GOeRaoMf%2BIRGECGUdHHMmA%2BWRRElmFbq7LHsDghPFD1RHiDRK%2BnbzTCH2KDABjqkAfUouyMJtAlJVVNdbWZqdsV5GIIQ8hVsNtz9rqVF62z3Jc8kud5AIu4qmihud%2Bf8MZ2LCEbJf%2Bxy%2FQPg34RjDqZ%2BbczyvuOfkqW9cKBg67NicDLn%2FdeKwV3IdAcUjwZNj4hPmXTshokSkwtMIl%2FTL%2BawCJVuaDSRKkO9ZUxOyWLSrpS6Vt3XFn2zO04tshdYZUmXwAiYFIe4wl4%2BvX%2BORhuEo21p&X-Amz-Signature=345cb6c24cfa18eb39ddf721513c9cb24f20ce50ee0a4cdfb9447a253246ded9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
