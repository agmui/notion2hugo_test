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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2EUZDLV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCpVke33yBYra279eMV%2BLhgYpa94aWhKypHZS%2F432GzYQIhAJV6mnMSLPUee6ofPDvGsf0b734GQ3vNj%2B11uenneUoXKv8DCHEQABoMNjM3NDIzMTgzODA1IgwmCWOaDbxSIig2sUIq3ANz1kR2StnL4oeL%2Bwgw6gsYuDCS%2B5Q2yEd43FJD6b%2Fd5cx89yuquwSr2g2dC4iBQq%2FXvno2zrkjNk2PS1vrXhnwqQA5FrDvJzU6Mo2%2F30TzRD60ra8RvmNdWbA19ITc7Q0Na0yfDUDg8P46K9A%2FAhgvs2HPSKKDwJLuR3rG9zNoBREOjMLgNSxvyJgOsdw9U8XjkCUToXDl2G3foY6UII6GVRuf95VX8sJuyHZTKpkosZnqdA85F%2FBmXztrmtW1UEPwkagWOm34m4NewaNMa8BnQyfIGJCd5Ui1rJvVSTji4lMMm2aEgkF%2BIgKiUpLVcGOtQ7c%2BIH0ID0J%2FMReUGahCfBtKYse%2BjvUfCBcHIywgmlHGmo2cvebYemJFSo8pFypOtjy9VDMQYF4NY4AfWClum8kEGSR9xB4%2BHhqfwdAZskq52KT9JqZL6lo4312ovDdsMp4ckavdCTYsBeXwu2T00wXqnGV%2FUvQvBfwGo0WheIVV66vqAc3ASMaCRm6NUF1NKAD%2BlXUf7dnsv51Am42xZ2c3FEjLWlF5wQ6aclCIukeeYEs%2BnE4iA8j0KYZoGo3WYe8m5qQSUZrtkou3kqVgiw2OkihdhtvQdK0xCeaRtmi8Pdj%2FZBj9H8IznjCT%2B5a9BjqkAWQ8revdScrd%2Fg3vpiKXDI1aF8dowchgXYRYl9M6YK5fV7NGhuBONBEI0k7bG0I3SPU%2BOBRjUJOgpZ2KstOUccc8grUWFdj2nLkJv7ZV9hGt5gjxk5cgP5%2FcJAnnDAZdu88o%2Fw0MVMTzMnmff7puXqixZo1IbZ%2B0gonqNiwuKJ328LWkbi3%2FRRPj4Is80TaofyXeSQ2qABDYN1St34axdR2dDgdH&X-Amz-Signature=08f577e714855cb3710ac75acb45feba93b07787e9b40b96299599bb68076c10&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2EUZDLV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCpVke33yBYra279eMV%2BLhgYpa94aWhKypHZS%2F432GzYQIhAJV6mnMSLPUee6ofPDvGsf0b734GQ3vNj%2B11uenneUoXKv8DCHEQABoMNjM3NDIzMTgzODA1IgwmCWOaDbxSIig2sUIq3ANz1kR2StnL4oeL%2Bwgw6gsYuDCS%2B5Q2yEd43FJD6b%2Fd5cx89yuquwSr2g2dC4iBQq%2FXvno2zrkjNk2PS1vrXhnwqQA5FrDvJzU6Mo2%2F30TzRD60ra8RvmNdWbA19ITc7Q0Na0yfDUDg8P46K9A%2FAhgvs2HPSKKDwJLuR3rG9zNoBREOjMLgNSxvyJgOsdw9U8XjkCUToXDl2G3foY6UII6GVRuf95VX8sJuyHZTKpkosZnqdA85F%2FBmXztrmtW1UEPwkagWOm34m4NewaNMa8BnQyfIGJCd5Ui1rJvVSTji4lMMm2aEgkF%2BIgKiUpLVcGOtQ7c%2BIH0ID0J%2FMReUGahCfBtKYse%2BjvUfCBcHIywgmlHGmo2cvebYemJFSo8pFypOtjy9VDMQYF4NY4AfWClum8kEGSR9xB4%2BHhqfwdAZskq52KT9JqZL6lo4312ovDdsMp4ckavdCTYsBeXwu2T00wXqnGV%2FUvQvBfwGo0WheIVV66vqAc3ASMaCRm6NUF1NKAD%2BlXUf7dnsv51Am42xZ2c3FEjLWlF5wQ6aclCIukeeYEs%2BnE4iA8j0KYZoGo3WYe8m5qQSUZrtkou3kqVgiw2OkihdhtvQdK0xCeaRtmi8Pdj%2FZBj9H8IznjCT%2B5a9BjqkAWQ8revdScrd%2Fg3vpiKXDI1aF8dowchgXYRYl9M6YK5fV7NGhuBONBEI0k7bG0I3SPU%2BOBRjUJOgpZ2KstOUccc8grUWFdj2nLkJv7ZV9hGt5gjxk5cgP5%2FcJAnnDAZdu88o%2Fw0MVMTzMnmff7puXqixZo1IbZ%2B0gonqNiwuKJ328LWkbi3%2FRRPj4Is80TaofyXeSQ2qABDYN1St34axdR2dDgdH&X-Amz-Signature=5143d2be37c3c9f02471e9d205d8ca61581f41233c9ef9345bc7d5795b29eb7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
