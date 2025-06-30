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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HQ54RE7%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCESHfgJ%2BM1YeNwp7yxfWG5tWy18qwoS5DwuIftCoZjdAIhAII3wIWnfrdn2hFADJPA%2FLb%2FaRZaEkyNGXyHan3pr6vqKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9%2BlIH%2B66SAX%2BLb00q3ANbQ0L%2FwmS9diK8ZwQ4Cmo60VihuXkxKrLHTxhc1J0lIFv8UovfG8aWwf3UAKGjjn9dmhX2yaymkcBlxKsiVjHfqHtjClFHLDBRZvQFOa8dCT%2Fl7s%2BROdPW%2FPcAndUH59O5h64nAkGalemN4K6B4uZw1pD4LlzG6xuzKRB68dCDsH7TgInZpwIdTUm0hptfYdg%2FfIb%2FSSk6Nvm3f4WdwxQtuoml9WnWoRXJ7u1%2FGPJ3CfwxdTOTxA626b1QUjaCmDSKClnggOUzQu%2BSzWB0vubRPs%2B7lgZJZhU1t3cVbZhToxX%2B71%2FnaHlCRfDfkLz1n2usxBYVk%2Bnlu%2BS74qabMqMx1CUey2zfyw40DR4UBoU3vSjwX3Coko88LpqNBYpwKGwnzgOaRHL2hEBPWqsoc1ndGfBtqjsIvSRMF30uv8xrsRjbdodYlApe7VyH9ZhYjwK8XlNW%2Bz%2F0FPiROxInZIHML0T%2FhC8Q%2Fy5Gi5Dea5ga9DzDV985UZcTC0sOwvS1oyAjhBIrNHKqUIEPCBe7PEvbzDoxw0cmGyys9fij34Ts9DhMxNNukseefz%2F7eNkKy7rlniF9mXckrTQckt7B2UZQb9U26JJHz8G23eOvBimSSU81Y3E%2FDrmY1Jyo0zDv7ofDBjqkASQ2piNk35y%2FEZE0A7Op4DZPfdMXxt8bP4jGTErvtAGCR0uRY%2BaW1T5a5xNCdyWXuyTEkA9lwgYD7aYtWy8qvOcGMf65f8upw6mLSAlDXCyxOclWFDWS9gsgghd8svtqA%2FsOqxqtIaEf4Py%2BjDWBxYwd2JFLFN%2F8S8YOXBG7QPoWvebTTnwVkb%2B%2BP3mRriV2C%2FXujPLDghZOBg%2B5TdBlcSLviVdh&X-Amz-Signature=b9159039994d36f24204e7a84be41b3649b98bf3e95c467562aad74e9e132082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
