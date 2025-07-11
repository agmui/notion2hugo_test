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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQFKYLTZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFRGlLzp5xRyyUv%2FIwBgTljB0RNy8KebFBCt8vSp6F%2FwIhAMt5LxkzrysBse7toLkp7BTV8ECJ5w3%2FQxQavRsHDLpSKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydAdf8JsI4vhulQK4q3AMhbMY7kM544UAIcKYH9Bo1w2Ti48bcL53fOHgs2s%2BAO7nJWIfMtzLLL9M%2B3egg%2Fmj96%2FsgcVx8hZJXs0%2BYgagTwh7ysHLEqwyZPt%2BcW6oGv1BjK%2BWSFYpFX35n7i5yQA8PD0o3bLCvcxShoKAwgKzmx2OsK48lFaDrDsBloFcJQxGEKJSzs3H1CsN3Aq57AobT9JoPNfMiazf7uAZs6TKaPzU8QE8SCsUT2k8vObxjy1dBx4gGFFN05DcTam4piR9di7GRsTThKK9Tq%2Brv1qzooOHLNkog0mDiJSufUCmJy87IJG%2FHt0tcM1sphECVL%2FJpDA2wvApdjSZAbRR%2FPP3xfrPLknu4CEbF4bkCFo8vbhoAzrigHcKgjjf2%2FiNMGdLFFnol54vm63tVqJ7AUMzObUaVLyRTERaL25ulhV2tjna0IuAd%2Bc1%2FEIL%2Fuxp9S5BSg0X1Ey0ewELdFJKmqeCTNl1JWCaTSBQPgVcyNJL5h4BqWfQ1tERFff3WDYpjHRrhhLLi8nmya3wfMmPQSv4f5u92vpKBQiM%2FEp3vDnfzfqIBGB%2B6e3u%2FyWeFTa9cTrplQtCacgMGRGM24vjQmrRFQGxNcFe9ytLujpLNiBReN0yDKW%2B3B7wh9lHf2DCB08LDBjqkAXHhpkOQOmKQsQB7VnLmBM6mjMSVwrnOVXhdVzyfC%2FQ1V5fkBxVtlreJ75QUSkZx4K70CUarCbF2dCDco2UgKExfSAD4YCPPA9HxKod3QIJBiDETPeUXaIzW9kc26ZYw4NnmX50TX%2FCKnO2oizHgpsrLe8mGp2An%2BtFJB%2FZnP2GImrM3PYKqiozyly6SlJa%2F2JrN0IE58CICgkngpiBFnJKF7aDp&X-Amz-Signature=66693a4098841cb254bbc33b35faa97bb819c284fa5725b9620049dc103e042e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
