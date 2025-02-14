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

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WGCUXPK%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPFSJjNGtp15SPjK4Ue%2Fw1gvr7lJLdpvKukoQmeewT4AiEAkVg1%2Be9y6j8AKolnRzp8%2BuY%2B53vol4aHaBsWBmTUC5Yq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDPzS0GJp%2F5El%2BdRRZSrcAz9uGKu7kkzaNrGjiiOxAnwsgyI3ZrM2LJV1pAgnTOFxgfzmUY1dEjWIDAodRZlA7jAsbaqLjZIJtB4V5gp2v%2BgTmiP09d8CiXKdXvuL3bE5qC2fBtjOaAVer7fwFi9KXD5gLncHdfcXGhPz0euTYGv4H%2Ffj7L2cUvw403b8RzNXtdNavu%2BjSSYl%2FthZJzWaxlg%2FE%2BQlzrz1eMFOJ8B%2BLrqd2JDpa%2BbAO5MvlVitAa4MoleaYPNMRBHQYGrzRnWPiG4zrZFHv9iojWsxtVTgj%2F4tvs90vXA00o4drhY%2FQv9SWajjlzsP24TjsmeFc0LWNPq3QbTTF1ZI7zVmeQaPd8N9ivGolLiFn%2FWNm%2FEYBiPnhNt2oANlugUMyCH0mAQ7NOfl9L9Aqxe%2BeuQ9kjnNDsEjb9XmkvpRWZLNssGKIGiIbGRyWC5KM5rNwJA9l6OhuaAv7qdbL74CoPRT1xDa6efiNI91j2mRSR7ecb%2BsUWDGCqqAuELWXwvWUKYsbNKTKn1m8KI3DMYmJiYkIOY6orF%2BZ1N3MBj6tvaDU%2Bv1qAcsVKq40Om3OJPVy5odKV6yGPnDtV4xCt3rCl4YjtnqzffPnGQ%2FHl3FFBSCgDV9hcB8nILTd4C0ifhRBqLZMN7Bu70GOqUBzdQSKN%2FcKZ0965NDYPaXNnzoa4CTLi7kJ1qiVWWDK4Ozz2QP%2F6f97lmr%2FafKZspFwC1NJJ26yLVGL59U19DrrbjIfTFZqQKCTkywYSMBgUoA81IZ7m1gJdBLMkWby28o8y069W14P0WnpkfVLhi7S4RazvZ9F6aiXzZVXJ5msA9%2Fzn6aOjhyLM6Mhfudnou%2BolT0841gXc5iPcNzzj5R3rxRBvGN&X-Amz-Signature=ce659b89f09f73d064400d59979552dcaaa453311f4aea1064303c74beb1a5cb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WGCUXPK%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPFSJjNGtp15SPjK4Ue%2Fw1gvr7lJLdpvKukoQmeewT4AiEAkVg1%2Be9y6j8AKolnRzp8%2BuY%2B53vol4aHaBsWBmTUC5Yq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDPzS0GJp%2F5El%2BdRRZSrcAz9uGKu7kkzaNrGjiiOxAnwsgyI3ZrM2LJV1pAgnTOFxgfzmUY1dEjWIDAodRZlA7jAsbaqLjZIJtB4V5gp2v%2BgTmiP09d8CiXKdXvuL3bE5qC2fBtjOaAVer7fwFi9KXD5gLncHdfcXGhPz0euTYGv4H%2Ffj7L2cUvw403b8RzNXtdNavu%2BjSSYl%2FthZJzWaxlg%2FE%2BQlzrz1eMFOJ8B%2BLrqd2JDpa%2BbAO5MvlVitAa4MoleaYPNMRBHQYGrzRnWPiG4zrZFHv9iojWsxtVTgj%2F4tvs90vXA00o4drhY%2FQv9SWajjlzsP24TjsmeFc0LWNPq3QbTTF1ZI7zVmeQaPd8N9ivGolLiFn%2FWNm%2FEYBiPnhNt2oANlugUMyCH0mAQ7NOfl9L9Aqxe%2BeuQ9kjnNDsEjb9XmkvpRWZLNssGKIGiIbGRyWC5KM5rNwJA9l6OhuaAv7qdbL74CoPRT1xDa6efiNI91j2mRSR7ecb%2BsUWDGCqqAuELWXwvWUKYsbNKTKn1m8KI3DMYmJiYkIOY6orF%2BZ1N3MBj6tvaDU%2Bv1qAcsVKq40Om3OJPVy5odKV6yGPnDtV4xCt3rCl4YjtnqzffPnGQ%2FHl3FFBSCgDV9hcB8nILTd4C0ifhRBqLZMN7Bu70GOqUBzdQSKN%2FcKZ0965NDYPaXNnzoa4CTLi7kJ1qiVWWDK4Ozz2QP%2F6f97lmr%2FafKZspFwC1NJJ26yLVGL59U19DrrbjIfTFZqQKCTkywYSMBgUoA81IZ7m1gJdBLMkWby28o8y069W14P0WnpkfVLhi7S4RazvZ9F6aiXzZVXJ5msA9%2Fzn6aOjhyLM6Mhfudnou%2BolT0841gXc5iPcNzzj5R3rxRBvGN&X-Amz-Signature=5a4a4a03326b82d683f148744d707db7a29cf1515c2fb755d2acf1df2d331be4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
