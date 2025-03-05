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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y36AVJ34%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8GESqoXpD1MQRrS2ugAbUau5mfe8gtWTs6uMDE%2BnTfAIhAKi8MN8%2BBHGDSpTENoh6N0dHSag%2BswDMIADvC31rSwEmKv8DCBAQABoMNjM3NDIzMTgzODA1Igwi29QIBvYTh2pd39Yq3AO%2FVTs5Lf5qi1R06T8WaBDiAd9Iv5UDTmliweoQ0uvIZ3t5ZqHIBlZkZpll785MRkBnNlHyHoTJXYaZdTNJwVgEsGnoxaVCwvYwikIXrVPlzgi4RV6ohbdu%2BeGTlmYQX4yMrvvl%2BFjuX3XVgGXa10dHRYoAjN1yH%2BVEhx4%2BKLwoD7uTgCsGf8w0PsQnVhJRwH8Ogx56ClVj9rcpZ90OpcJizKieena3jo74OIIYRdMBboNzNI0dXiJ3hNX2mQzYj6aIdgPMAIk8V6N6iKR4lOliCDjfV70VJvfy7YN%2Fb0r8%2BeQDZr6rVkyB%2FYVAD2G8tNUsTbHMgD4DhPm7N9or0Lx5mOCrhMLb9%2BIuyAqHCwENCjBFT6luDl5IeMYh24Mw8wJQNWu00LGpI44IzTrgHfDTriQIvSWtiPAn4ECFPKr5aI71Czb%2BWUxc2tSkX4PRzsTl7dEA5wH1pz9%2BOhOU5imp6wKPVpyUdtR3QiM5KxTPZvvnEbkQC0jfXjj6Q42vGP88QhdWf3KWmKc2NUdeodcF1QDQ6HOSzXsPLvoACF%2Fztcw7NM06yzNHsZarKC1hu0MGhqrmE3qy1Z8MbLzmNAIwqsylm3c0VRTfsfikD48uiGvDPZgsB%2BBus21XpTD66Z%2B%2BBjqkAbbulBDakEjkeFISVMXkKlNFShhhGk%2BXvEkeb8XRwYPOSCLYNizd%2FmM9HytEkueh090C%2B4dGmTzLYoaEvwoqY94%2F3sP8m4qkTg9gidLKuiFlsgcGRS%2B%2BYIhmlr7orYsnWXHtC3Kyzbdaab7pRsxJ67jzqCJg%2BhjCGn1qvyx4f%2B8UKNRaZaZzyYK9G3soiMnUT5zWYMYBJC%2FCRWVLBlDzaaEsug99&X-Amz-Signature=e0f3fe69f86bacb7f60000c3efa1e34db004afbb28f1a41cc48d4101fa1a3700&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
