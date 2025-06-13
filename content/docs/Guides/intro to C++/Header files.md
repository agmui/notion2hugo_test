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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USSU5NZT%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCM10ahpbPOSu5RRc7KV%2BwWE7h1AQttdy7Lnq2OPWYoSwIhAJT67iO4xs4ZTB6XxYKAqTzZcsVKPtd5AKmFGltTVTgSKv8DCBUQABoMNjM3NDIzMTgzODA1Igyu1wKITxnWx6vVXTwq3APJAHUD6GmBgsxUD78O9RFr39g6ms8NoWoCpp6rPtl3XZ8%2FQYOY%2BEI%2Bq7V8LdiMMELdEA7uQbSNRs5CCQIhuzdvRlUAIT6fGjmYuDDl9RBO%2FW9v2E10gbeAK9z7NjnemyLEwWfBnH7Q9iqlScmXe0%2BXoo4oxmn2M7KbBFc%2F9C2E5cMo89jBBMj2O64%2F6lhKewpEnG%2FiKR0KiEcm62LzlkqPXoLjjI9abR1wlhYyKmAQ4ANdaUp1fOznXKefSJXn04SGlAUXvh4w36B7T7P66j%2FzY%2BDk8gwfteaToYfGmmA9b4RdfcCYnz%2BWZSG2NjtkjimiAQh%2FF9nq8Agbjzj8olRFs4B0zBeZTG%2BRJsGuW%2FmF0nwwlF5sRvKl5DJ5kOINlyRaIunRthSwpjcGIFJN77UJS3%2Bm9r3grDefawkuCUtmibd%2FhJpmnsJcy%2B%2Fe%2B%2FrRmqZ6VfmZ77ifHGnVI7GyoNr97ekX%2Ft%2FNerYUR7irI7iLpJxghieSOl%2F9pANiIvUD52PHMXPkzY64gcUZK2Upc3MiZhuHYZs2T3Dq2jbM%2Bl7Yyfc1bvrAWKZjVv8pE66a8%2BUrGgZnAw0NdBfQcWVNHjOpg6QtuErXkGuoYHk%2FGFc97RmRjhbOw54VD4mdzDCAqrDCBjqkAWbHVNTMK%2Fk4x8G2%2BDgl0tQShNeHPfk0XkRA%2BGo%2B9ePianDDWRZrGH7ODBnyanYdLW5grauV2Am%2B1kY2z5BTZsUjhQtRBNphnS3WuL3PpZ8yWzK4FayCy0Hm6rkKzgDcU5pOKN%2FcsArs8ApReMxZ4EQiIzzuR9EIAJfHzXCJ9TG7G3lCdHXcgx1oTetdvfyTeGLmGyNkGmmRzPHVqKpPtMbiKnET&X-Amz-Signature=5a91dd1c5c42849df189aa532302a3a5956857658054c63d87c4b03630b638f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
