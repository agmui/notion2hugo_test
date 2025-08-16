---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}


### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MBUC2MS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIC91J6qwpDdeKJAAvVddzGCPa0Z2Gke1xyB25HvVru3SAiBsFTiHmZE4cKXmAm37DX91HVwOayW9jTMtz863dfp0myr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMg3zEyS1b541wfKQAKtwDXJhQquDLsZd3u9IM6nigM8cPhhpI5vw1neVo9hkynBEnK6KYIcJxzqNQrY9Fpy8DFSHXMKLdKhid0G7YFi7dk0Mc%2Fh%2BkJzT2BsS25faQme6QNaRAhVFb9Kz5KZTIhSXqTB6vFasfFwj%2FV7t83eQCpiui9Z7kHg8n80t4H2oV4wGr1CCwQZoAFvZzuf8kjuViSd5upMxzZWJ6M23QZL4F3azWhdwiRw%2F5EnaJQ1KpqxYU5br5YpEyQWSqTZNumXNlcusDSi3AY0MxWNOUOdBsntL72J2V%2F6eiiF2mzALgMefQC1LD%2FIM9S%2BbSrcIzlHRw6x83umbGppHsoa1qetlelRRfAj9FxLNx%2BTGj6IaYGUqjbNm3Qzxdg38XvMd%2F3jJ0DVq3BmpEdc8wZ4tsW%2FJeq90mLiZT4v7voFtJ5uDYJg1Jry%2FihpyNQVcBvnPJzDOiQYuMLBYCI7e4NwgGL%2FNtelDHHcPV1OmicbQSZBEbwI2mgmorTXHqodfzLMkuXHnH7RUXdpBz1j6l%2Bua%2BdHktzI6tJDS%2BSY%2B8SxtlWfDC4eCHCdK0khoyI3x11eDabG0cHp58oozFd0p3%2F1MsVGyIf%2BG7xRSzZW1d3oinWx%2BeGzJbOwYAtuc7BqlLYEYw1pmCxQY6pgF%2FJwy1zFjHYp2B5Wt9GjwC3pF4Buwvv%2FqnKJJW2LpO0AvYyHxM%2BOhEowN3U7KbU8u9RJdseIBmU3kGNtE8LWpabrRH%2BjFOual4HR3zqfoz7hmT3fojbRu9Q1ypWsySsT1FK1jCBYzrTLh96uZFKJWd%2BDlNXYPH9I9tKUbX4XIigpCrXhX7VhV8mSxo30jZRGEUyN4ZTjkjopx9hk8sHeVNHjTNs%2FpA&X-Amz-Signature=94c634576b44a0df666ff9094af2beae9979aacee06ab4e59628a89b752b6d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MBUC2MS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIC91J6qwpDdeKJAAvVddzGCPa0Z2Gke1xyB25HvVru3SAiBsFTiHmZE4cKXmAm37DX91HVwOayW9jTMtz863dfp0myr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMg3zEyS1b541wfKQAKtwDXJhQquDLsZd3u9IM6nigM8cPhhpI5vw1neVo9hkynBEnK6KYIcJxzqNQrY9Fpy8DFSHXMKLdKhid0G7YFi7dk0Mc%2Fh%2BkJzT2BsS25faQme6QNaRAhVFb9Kz5KZTIhSXqTB6vFasfFwj%2FV7t83eQCpiui9Z7kHg8n80t4H2oV4wGr1CCwQZoAFvZzuf8kjuViSd5upMxzZWJ6M23QZL4F3azWhdwiRw%2F5EnaJQ1KpqxYU5br5YpEyQWSqTZNumXNlcusDSi3AY0MxWNOUOdBsntL72J2V%2F6eiiF2mzALgMefQC1LD%2FIM9S%2BbSrcIzlHRw6x83umbGppHsoa1qetlelRRfAj9FxLNx%2BTGj6IaYGUqjbNm3Qzxdg38XvMd%2F3jJ0DVq3BmpEdc8wZ4tsW%2FJeq90mLiZT4v7voFtJ5uDYJg1Jry%2FihpyNQVcBvnPJzDOiQYuMLBYCI7e4NwgGL%2FNtelDHHcPV1OmicbQSZBEbwI2mgmorTXHqodfzLMkuXHnH7RUXdpBz1j6l%2Bua%2BdHktzI6tJDS%2BSY%2B8SxtlWfDC4eCHCdK0khoyI3x11eDabG0cHp58oozFd0p3%2F1MsVGyIf%2BG7xRSzZW1d3oinWx%2BeGzJbOwYAtuc7BqlLYEYw1pmCxQY6pgF%2FJwy1zFjHYp2B5Wt9GjwC3pF4Buwvv%2FqnKJJW2LpO0AvYyHxM%2BOhEowN3U7KbU8u9RJdseIBmU3kGNtE8LWpabrRH%2BjFOual4HR3zqfoz7hmT3fojbRu9Q1ypWsySsT1FK1jCBYzrTLh96uZFKJWd%2BDlNXYPH9I9tKUbX4XIigpCrXhX7VhV8mSxo30jZRGEUyN4ZTjkjopx9hk8sHeVNHjTNs%2FpA&X-Amz-Signature=48fc79a9b0aa835030a70478f8f67500d5105961911b5c69f05dde1d604bc7a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
