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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZVIU7FY%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFQ6rZehSIbhU4n%2B38sco%2BiibNfFf7LHuQskAAVnGgyxAiEA21GjU7A0K6OntrnxiGgwqIdMa%2FWausReM1Og89Hhr1EqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNsVC76jk4uhqh9eCrcA7YYTeo%2BY99IVwBZLhQji9Gc4b88AR%2BRurjc%2FgQc8F8EJw8FQaRjlo6mH8Wunv%2BrjRg5FNSu3fLIx0RptXHtKuLKVgK4sEIvtEpsYDRpVbqKVbfJNfxbYK9GrH%2B70KJNWTqQpzN8lf643s0Rf7YHl5AiExk%2Bt2NdBy0Ii%2BhrWtcn3gm93QqZCyRJuyAd2UftzBjxP14UHU7R0izsgzzKbY5TN54q2Xk7L012Tzq7twmgYKmv4FAZ5CxCTfgqEOk2MuEGn48ZT6bzcNEK52jYeLXEGSVkQ54Z1lrI1JyuoVIKg268N4OaWomg2QaXspeYfNdWwbWUOqu6LwkTZfdGw2TKrjIDHYLE6VvszDX1jbe165aqtm%2FmogP9N4RSNh6gZXMeC76SuYnFcesAD6%2FDQ12%2BkUVtt7iquIDPtlUxkMThwsxpjM4VIPrAchlPkdPOD%2BkD6NcPF3%2FyfNOMSVA%2BLJSRMAjsHTFqtq%2BDU4%2BJCrOmC3%2BT48bVdWdM6iYsbPP9GnFihUNr7vhssFT3NKiOmHpjy5ZGjAzkuc3%2FppdET%2FeGTG2u6XIGZ6WbsXmRIZ%2FR%2B5Tvt2ZVVgTmeDfI089kF%2FWyRQK%2FmmRO4T%2F9m6RG89mJsAzgdVhClTk0noBsMOPIuL8GOqUB%2BcZP6RQ7eSH%2B6yOurCoQjwXI1C%2FAvs4vSyjpqAd6b3sx17TqwObpGFBhkwu%2BKLRd3HgkfGHjvcXz9sbt1ySAHcYX1ezMoTEEqBMeu5olQUtrMRefJvdPOZ6Ft8sxwCb3fF5ulmipXceoq5Ek60eAhwsQrA3BBABkNl5Igsxb3m7YbSPywH5voGrW3ZdYC%2BRUZKt0IvXT11iIV9z15b5znqaqodI5&X-Amz-Signature=028f6eca2030d83ad8ec7b9aa776cb1cac4f977cdfdc8afc990a26effc00423f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
