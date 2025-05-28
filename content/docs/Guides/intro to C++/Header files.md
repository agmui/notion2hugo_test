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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSI6RVPP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFS%2Bg2wo4hozZGemRum3IelqTNBDRlMTQUw0pIseFFbWAiEAhGEbCOyk58wZ%2BvhBhOxbLQe8xZgg6WOAG%2Bdvv%2Br0XgUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCGswK5OORsjE%2BnwPyrcA6LuWpbA9vap5%2FsObcj09%2FIXmBWklGPQCDTTMD8yyzYBlIhD7zDHvVKThzcenPd%2FgZvDrGXRMxYmjpW4to115ylFr5pgg1uBX1quEaSu7u9CBFywuwUM7DViALa2gdzmgTUVkcDhQDzpOzGhDBc5mLngB9HBkSaJublvJhiU706HL0nKim9vsPMmyQMkzBN1awvhxNtEOFPwmcEkjcmHyAV1lOYR7jgQ3xEmAOGWj9cMsZZqJoA2cWMexuXAqIodvfLz8XRTmzYNDyN2QRvfGCmuaiwfYBPhgyIMnbMuSnuIywY9vtoSf7mIPeIsz2CgkfGJHfeQCyPGS9BEfTAig%2F2rqfFyrOPWxJd2SAP8TVFI4LPOwFrEOrZl87lTSVADSufCUcXoeZKbpEL%2FPlG2XcGiIP8DYek4fNN%2B3Xaw2JBfE9rUAPOhbuQMom5srPc8k1y4jEN0OEM8v34JbZ3IrVRCkeD5FcH6FiYJmz%2F5m9X%2Fm4e15KOBv5Fm%2FXyC0Nmsl8LtEwP4eRAJV5BguJdjVKJBnXGTUCXauuV8jOtOh54MwnBaKL6dxeAAGDp3xb6993%2F7AFPy%2FnD7R%2BF7JwCcuSZIsfOCF%2FlZvSk7w02xAHnguXfWKsr2JNM1leuiMJD43MEGOqUBNDJrYYCvMu7YGbLD1%2BnT%2Fzgz4NhQS%2FWKLas0hSSYIUDhVs9YxMq6WDS0wz6zstgbZDFGoP1pjOoGQ4MTVRR%2BYffRJNDHjs2s41hjKmFqsiVxD65V8iK8339t%2B8cqqyVvqcvm5ZA41IFrpKQCT%2FKLJJiy9LUX3TbHkmjwuRQZQbYmRNZvf7%2FSl4oUe2djcGDzlghd%2BpeGNfiDVXWDga92M3YXvDMc&X-Amz-Signature=460bc4aa1a40b80156208040e53761b43f82cb589768a3db70a62436a120a1d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
